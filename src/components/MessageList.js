import { useEffect } from "react";
import Message from "./Message";

const MessageList = ({ messages }) => {
  useEffect(() => {
    // on first render, or when new messages - scroll to top of the container
    const messageContainer = document.getElementById("messageList");
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }, [messages]);

  const renderedMessages = messages.map((message, i) => {
    return (
      <Message
        key={i}
        username={message.username}
        message={message.message}
        userSent={message.currentUser}
      />
    );
  });

  return <div id='messageList'>{renderedMessages}</div>;
};

export default MessageList;
