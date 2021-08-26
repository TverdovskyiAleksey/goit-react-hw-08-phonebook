import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <nav>
    <NavLink to="/login">Login</NavLink>

    <NavLink to="/register">Register</NavLink>
  </nav>
);

export default AuthNav;
