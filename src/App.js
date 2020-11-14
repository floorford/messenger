import React from "react";

import Chat from "./components/Chat";

// Build a basic Messenger app.
// Aim to spend no more than two hours on this task.
// Focus on your strengths
// Make sure that you can explain your implementation
// You will be given a task to refactor or improve it.

// Goals:
// 1. The user should be able to write messages in the chat window and see them appear.
// 2. The user should be able to select a friend and see his chat with this friend.

// Non-Goals
// 1. Persisting chat history.
// 2. Talking to a backend.
// 3. Multiple users.

class App extends React.Component {
  constructor() {
    super();

    this.state = { username: "", submitted: false };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    const { username, submitted } = this.state;

    return (
      <main>
        <h1>Messenger Application</h1>
        {submitted ? (
          <Chat />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              onChange={this.handleInputChange}
              placeholder='Please enter a username...'
              required
              value={username}
              name='username'
              id='username'
            />
            <button type='submit'>Submit</button>
          </form>
        )}
      </main>
    );
  }
}

export default App;
