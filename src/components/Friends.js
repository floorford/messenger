import { fakeUsers } from "../Users";

import User from "./User";

const Friends = ({ chatToUser }) => {
  return (
    <section className='friends'>
      <ul>
        {fakeUsers.map((user) => {
          const status = user.online ? "online" : "offline";
          return (
            <User
              key={user.id}
              user={user}
              chatToUser={chatToUser}
              onlineStatus={status}
            />
          );
        })}
      </ul>
    </section>
  );
};
export default Friends;
