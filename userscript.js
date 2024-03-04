// ==UserScript==
// @name         Set Prompt Parameter in Textarea and Trigger Send Button on https://chat.openai.com/
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Set the value of the "prompt" URL parameter into a textarea with ID "prompt-textarea" on toto.com pages and trigger send button click if the button is present and not disabled
// @author       You
// @match        https://chat.openai.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const attemptLimit = 3; // Number of attempts to find the button
  const interval = 200; // Interval between attempts
  let attempts = 0;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // Check for the button periodically until it's found or until the attempt limit is reached
  async function setPromptParamInTextarea() {
    const params = new URLSearchParams(window.location.search);
    const promptParam = params.get("prompt"); // Get the "prompt" parameter value
    let sendButton = document.querySelector(
      'button[data-testid="send-button"]'
    );
    let textarea = document.getElementById("prompt-textarea");

    while (attempts < attemptLimit) {
      if (sendButton && promptParam) {
        if (textarea) {
          textarea.innerHTML = promptParam; // Set the value of the textarea
          textarea.value = promptParam; // Also set the value property of the textarea
          console.log("Prompt parameter set in textarea.");

          // Dispatch an 'input' event to ensure any listeners for input changes are notified
          textarea.dispatchEvent(
            new Event("input", {
              bubbles: true,
            })
          );
        } else {
          console.log('Textarea with ID "prompt-textarea" not found.');
        }
      }
      console.log(`Attempt ${attempts + 1} of ${attemptLimit}`);
      attempts++;
      await sleep(interval);
      // Refresh references in case they have changed
      sendButton = document.querySelector('button[data-testid="send-button"]');
      textarea = document.getElementById("prompt-textarea");
    }
    // Check if the button is not disabled before triggering a click event
    if (!sendButton.disabled) {
      sendButton.click(); // Trigger a click event on the button
      console.log("Send button clicked.");
    } else {
      console.log("Send button is disabled. Not triggering a click event.");
    }
  }

  // Run the function to set the "prompt" URL parameter in the textarea and trigger the send button
  window.addEventListener("load", function () {
    setTimeout(setPromptParamInTextarea, 500); // Adjust delay as needed to ensure DOM elements are loaded
  });
})();
