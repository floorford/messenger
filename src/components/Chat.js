import React from "react";

import MessageList from "./MessageList";
import Input from "./Input";

// The main chat window
class Chat extends React.Component {
  constructor() {
    super();

    this.state = { messages: [] };
  }

  handleSendMessage = () => {};

  render() {
    return (
      <section>
        <MessageList messages={this.state.messages} />
        <Input onSubmit={this.handleSendMessage} />
      </section>
    );
  }
}

export default Chat;
