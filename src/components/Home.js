import React from "react";

class Home extends React.Component {
  constructor() {
    super();

    this.state = { name: "", userData: {} };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const randomNum = Math.ceil(Math.random() * 10000);
    const userData = {
      name: this.state.name,
      id: randomNum,
      online: true,
      role: "Member",
      img: "https://talkjs.com/docs/img/ronald.jpg",
    };

    localStorage.setItem("currentUser", JSON.stringify(userData));

    this.setState({ userData });

    this.props.history.push("/friends");
  };

  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Profile Creation</h3>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          onChange={this.handleInputChange}
          placeholder='Please enter a name...'
          required
          value={name}
          name='name'
          id='name'
        />
        <button type='submit' disabled={!name.length ? true : ""}>
          Submit
        </button>
      </form>
    );
  }
}

export default Home;
