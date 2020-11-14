import { useState } from "react";

// Where the user enters message
const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleMessageSend = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleMessageSend}>
      <label htmlFor='message'>Your Message:</label>
      <input
        type='text'
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder='Type a message...'
        required
        name='message'
        id='message'
      />
      <button type='button' onClick={handleMessageSend}>
        Send
      </button>
    </form>
  );
};

export default Input;
