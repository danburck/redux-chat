# redux-chat

[redux-chat](https://danburck.github.io/redux-chat/) is multi-channel chatroom like slack. I build this to have some fun with Redux.

## Features
- On page load, the browser prompts me for a username
- After the username prompt, the chat loads with a default channel selected. Messages appear and scroll down to the most recent
- Focus is set on message box on load
- I can type a message and post it. It instantly appears right above the message box, and the message box clears. Focus is kept on message box
- When I post a message, it's under the username I set on page load
- When I click on another channel, the messages from the previous one disappear, and the messages from the newly selected channel appear
