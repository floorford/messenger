import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./css/style.css";

import Chat from "./components/Chat";
import Home from "./components/Home";
import Messaging from "./components/Messaging";

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
