import React from "react";
import Talk from "talkjs";

import Nav from "./Nav";

class Messaging extends React.Component {
  constructor(props) {
    super(props);

    let currentUser;
    const currentStoredUser = localStorage.getItem("currentUser");

    if (currentStoredUser) {
      currentUser = JSON.parse(currentStoredUser);
    }

    this.state = { currentUser };
  }

  componentDidMount() {
    Talk.ready
      .then(() => {
        const me = new Talk.User(this.state.currentUser);

        window.talkSession = new Talk.Session({
          appId: "t39Gmw8k",
          me: me,
        });

        this.inbox = window.talkSession.createInbox();
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  render() {
    return (
      <>
        <Nav />

        {/* talkjs looks for this ref to render its prebuilt chat box */}
        <div
          style={{ height: "500px" }}
          className='inbox-container'
          ref={(c) => (this.container = c)}
        >
          Loading...
        </div>
      </>
    );
  }
}

export default Messaging;
