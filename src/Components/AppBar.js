import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './userMenu/UserMenu';
import AuthNav from './AuthNav';
import { authSelectors } from '../redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(isLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav />
      <UserMenu /> */}
    </header>
  );
}
