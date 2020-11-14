// an individual message
const Message = ({ username, message, userSent }) => {
  const sentByUser = userSent ? "user-sent" : "";

  return (
    <div className={`message ${sentByUser}`}>
      <p className='username'>{username}</p>
      <p className='message-body'>{message}</p>
    </div>
  );
};

export default Message;
