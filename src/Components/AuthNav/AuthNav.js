import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <nav>
    <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
      Login
    </NavLink>

    <NavLink
      to="/register"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Register
    </NavLink>
  </nav>
);

export default AuthNav;
