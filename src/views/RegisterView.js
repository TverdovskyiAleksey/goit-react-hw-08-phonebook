import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from '../redux/auth';

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
    <div>
      <h1>Login page</h1>
      <form onSubmit={handelSubmit} autoComplete="off">
        <label>
          Name
          <input type="name" name="name" value={name} onChange={handelChange} />
        </label>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
