import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from '../redux/auth';
import styles from '../styles/AppBar.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={styles.Register}>
      <h1>Register page</h1>
      <form className={styles.form} onSubmit={handelSubmit} autoComplete="off">
        <div>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="name"
              name="name"
              value={name}
              onChange={handelChange}
            />
          </label>
        </div>
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
          Register
        </button>
      </form>
    </div>
  );
}
