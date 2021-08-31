import { useSelector } from 'react-redux';
import Navigation from './Navigation/Navigation';
import UserMenu from './userMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
import { authSelectors } from '../redux/auth';
import styles from '../styles/AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  // console.log(isLoggedIn);
  return (
    <header className={styles.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav />
      <UserMenu /> */}
    </header>
  );
}
