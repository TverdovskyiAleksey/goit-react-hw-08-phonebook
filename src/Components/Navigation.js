import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact>
      Home
    </NavLink>

    <NavLink to="/contacts">Contacts</NavLink>

    {/* <NavLink to="/login">Login</NavLink>

    <NavLink to="/register">Register</NavLink> */}
  </nav>
);

export default Navigation;
