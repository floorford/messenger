import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to='/friends'>My Friends</Link>
      </li>
      <li>
        <Link to='/messaging'>Messaging</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
