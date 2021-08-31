import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from '../redux/auth';
import styles from '../styles/AppBar.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };
  const handelSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div className={styles.Register}>
      <h1>Login page</h1>
      <form className={styles.form} onSubmit={handelSubmit} autoComplete="off">
        <div>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={handelChange}
            />
          </label>
        </div>
        <div>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={handelChange}
            />
          </label>
        </div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

// export default LoginView;
