# ClockBellCounter Example
The code contained is the implementation of the clockbell counter story. Tests have been included to cover all the test cases.

## Assumptions
The included code assumes the user has node.js v8 installed on the system. Additionally, to reduce complexity no transpilation steps are used, as such it doesn't use es6 import/export commands. The exported class is found under ./src/index.js the main file of the module.

Input validation is not done do to simplicity. While the story does not call for it, I made the assumption it wasn't necessary to validate input. In a typescript implementation I would rely on type compilations and helper functions to validate input for use elsewhere.

Commands assumed you're in the current directory.

## Setup 
To set up the node environment for nvm:
``` nvm use ```

To install the application: 
``` npm i ```

To run the tests and code coverage run npm test
``` npm test ```