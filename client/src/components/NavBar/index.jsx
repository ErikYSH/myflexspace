import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      {/* <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link> */}
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/posts"
        style={({ isActive }) => ({ color: isActive ? "green" : "blue" })}
      >
        Posts
      </NavLink>
      <NavLink to="/homies">Homies</NavLink>
    </div>
  );
}
