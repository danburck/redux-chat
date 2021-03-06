import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case CREATE_MESSAGE: {
      const newMessages = state.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    }
    default:
      return state;
  }
}
