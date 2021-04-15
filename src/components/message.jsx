import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="message">
        <div className="message-title">
          <strong>{this.props.message.author} {this.props.message.created_at}</strong>
        </div>
        <div className="message-content">
          {this.props.message.content}
        </div>
      </div>
    );
  }
};

export default Message;
