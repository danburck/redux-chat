import { FETCH_MESSAGES } from '../actions/index';
import { CREATE_MESSAGE } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages;
    }
    case CREATE_MESSAGE: {
      const messages = state.messages;
      const newMessages = messages.slice(0);
      newMessages.push(action.payload);
      return newMessages;
    }
    default:
      return state;
  }
}
