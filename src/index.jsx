// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';

const identityReducer = (state = null) => state;

const initialState = {
  messages: [
    {
      "author": "anonymous92",
      "content": "Hello world!",
      "created_at": "2017-09-26T23:03:16.365Z"
    },
    {
      "author": "anonymous77",
      "content": "My name is anonymous77",
      "created_at": "2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['general', 'react', 'paris'],
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  selectedChannel: 'general',
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: identityReducer
});

// render an instance of the component in the DOM
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

