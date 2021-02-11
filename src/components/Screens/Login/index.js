import React, { useState } from 'react';
import useUser from '../../../hooks/useUser';
import styles from './styles.css';
const Login = () => {
  const { user, login, logout, fetching } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (fetching) return <div className='loader'></div>;
  return (
    <div>
      {user ? (
        <>
          {`Usuario logueado : ${user.first_name} ${user.last_name}`}
          <br />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h4>LOGIN</h4>
          <form>
            <label>Username: </label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <label>Password: </label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <br />
          <br />
          <button onClick={() => login(username, password)}>Login</button>
        </>
      )}
    </div>
  );
};

export default Login;
