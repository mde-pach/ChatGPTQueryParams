## Overview

This user script is designed to enhance your experience on https://chat.openai.com/ by automatically use the value in the query param `prompt` in the textaread and automatically trigger the submit button.

## Installation
- Ensure you have a user script manager installed in your browser (e.g., [Tampermonkey](https://github.com/Tampermonkey/tampermonkey), [Greasemonkey](https://github.com/greasemonkey/greasemonkey)).
- Create a new user script in your user script manager.
- Copy and paste the [entire script](./userscript.js) provided above into the new script section of your user script manager.
- Save the script to apply the changes.

## Usage
Once installed, the script runs automatically on pages matching the pattern `https://chat.openai.com/*`. It requires no manual intervention. Ensure the "prompt" parameter is included in the URL to see the script in action.

For my side, I'm using it with a custom quicklink with [raycast](https://www.raycast.com/) to enable a quick access to chat gpt prompt.



## Compatibility
The script is designed to work with standard web browsers with user script extensions like Tampermonkey or Greasemonkey.
It's only working with the webpage https://chat.openai.com/.
