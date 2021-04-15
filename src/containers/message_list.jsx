import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

function mapStatetoProps(state) {
  return {
    messages: [
      {
        "author":"anonymous92",
        "content":"Hello world!",
        "created_at":"2017-09-26T23:03:16.365Z"
      },
      {
        "author":"anonymous77",
        "content":"My name is anonymous77",
        "created_at":"2017-09-26T23:03:21.194Z"
      }
    ]
  };
}

class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {
          return (
            <Message
              message={message}
              key={message.created_at} />
          );
        })}
      </ul>
    );
  }
}

export default connect(null, mapStatetoProps)(MessageList);
