import { fakeUsers } from "../Users";

const Friends = () => {
  return (
    <section>
      <ul>
        {fakeUsers.map((user) => (
          <li key={user.id}>
            <img src={user.img} alt={user.name} />
            <div className='user-info'>
              <h4>{user.name}</h4>
              <p>{user.online ? "online" : "offline"}</p>
            </div>
            <button>Message</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Friends;
