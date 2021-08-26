import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import defaultAvatar from './default-icon.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  return (
    <div>
      <img src={avatar} width="32" alt="avatar" />
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </button>
    </div>
  );
}
