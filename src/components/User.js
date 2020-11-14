const User = ({ user, chatToUser, onlineStatus }) => (
  <li className='user' key={user.id}>
    <img src={user.img} alt={user.name} />
    <div className='user-info'>
      <div>
        <h4>{user.name}</h4>
        <p className={`status ${onlineStatus}`}>{onlineStatus}</p>
      </div>
      {chatToUser ? (
        <button onClick={() => chatToUser(user)}>Message</button>
      ) : null}
    </div>
  </li>
);

export default User;
