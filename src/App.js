import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./css/style.css";

import Chat from "./components/Chat";
import Home from "./components/Home";
import Messaging from "./components/Messaging";

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

const App = () => {
  return (
    <main>
      <Router>
        <header className='main-header'>
          <h1>Messenger Application</h1>
        </header>
        <Route path='/' exact component={Home} />
        <Route path='/friends' component={Chat} />
        <Route path='/messaging' component={Messaging} />
      </Router>
    </main>
  );
};

export default App;
