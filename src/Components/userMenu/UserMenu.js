import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import defaultAvatar from './default-icon2.png';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  return (
    <div className={styles.user}>
      <img className={styles.img} src={avatar} width="32" alt="avatar" />
      <p className={styles.text}>Welcome, {name}</p>
      <button
        className={styles.button}
        type="button"
        variant="success"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </button>
    </div>
  );
}
