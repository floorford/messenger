import { Link } from "react-router-dom";

const Nav = () => {
  const clearSessionStorage = () => {
    localStorage.removeItem("currentUser");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to='/friends'>My Friends</Link>
        </li>
        <li>
          <Link to='/messaging'>Messaging</Link>
        </li>
        <li>
          <Link to='/' onClick={() => clearSessionStorage()}>
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
