import React from "react";
import Talk from "talkjs";

import Friends from "./Friends";
import MessageList from "./MessageList";
import Input from "./Input";

// The main chat window
class Chat extends React.Component {
  constructor() {
    super();

    let currentUser;
    const currentStoredUser = localStorage.getItem("currentUser");

    if (currentStoredUser) {
      currentUser = JSON.parse(currentStoredUser);
    }

    this.state = { messages: [], currentUser };
  }

  // componentDidMount() {
  //   const currentUser = this.props.username;
  //   Talk.ready.then(() => {
  //     let me = new Talk.User({
  //       id: currentUser.id,
  //       name: currentUser.name,
  //       email: currentUser.email,
  //       photoUrl: currentUser.photo,
  //       welcomeMessage: "Hey there! How are you? :-)",
  //     });

  //     window.talkSession = new Talk.Session({
  //       appId: "t39Gmw8k",
  //       me: me,
  //     });
  //   });
  // }

  handleSendMessage = () => {};

  render() {
    const { currentUser } = this.state;

    return (
      <section>
        <nav>
          <a href='/friends'>My Friends</a>
        </nav>

        <section>
          {currentUser && (
            <div>
              <picture className='current-user-picture'>
                <img alt={currentUser.name} src={currentUser.img} />
              </picture>
              <div className='current-user-info'>
                <h3>{currentUser.name}</h3>
                <p>{currentUser.online ? "online" : "offline"}</p>
              </div>
            </div>
          )}
        </section>
        <Friends />
        <MessageList messages={this.state.messages} />
        <Input onSubmit={this.handleSendMessage} />
      </section>
    );
  }
}

export default Chat;
