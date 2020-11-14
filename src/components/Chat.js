import React from "react";
import Talk from "talkjs";

import Friends from "./Friends";
import Nav from "./Nav";
import User from "./User";

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

  handleChatToUser = (user) => {
    const { currentUser } = this.state;

    /* Session initialization code */
    Talk.ready
      .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User(currentUser);
        const friend = new Talk.User(user);

        /* Create a talk session if this does not exist */
        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "t39Gmw8k",
            me: me,
          });
        }

        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, friend);
        const conversation = window.talkSession.getOrCreateConversation(
          conversationId
        );

        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(friend);

        /* Create and mount chatbox in container */
        this.chatbox = window.talkSession.createChatbox(conversation);
        this.chatbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  };

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <Nav />
        <section>
          {currentUser && (
            <User user={currentUser} chatToUser={false} onlineStatus={true} />
          )}
        </section>
        <section className='messenger-window'>
          <Friends chatToUser={this.handleChatToUser} />
          <div className='chatbox-container' ref={(c) => (this.container = c)}>
            <div id='talkjs-container' style={{ height: "300px" }}>
              <i></i>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Chat;
