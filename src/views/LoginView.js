import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from '../redux/auth';

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
    <div>
      <h1>Login page</h1>
      <form onSubmit={handelSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" value={email} onChange={handelChange} />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handelChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// export default LoginView;
