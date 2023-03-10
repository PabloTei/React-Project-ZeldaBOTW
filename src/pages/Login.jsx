import './Login.css';

import { useContext, useRef } from 'react';
import { useState } from 'react';

import { UserContext } from '../context/userContext';

const Login = () => {
  const inputRef = useRef(null);
  const { login } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleChange = (ev) => {
    setMessage(ev.target.value);
  };

  return (
    <main className="login">
      <img
        src="https://www.seekpng.com/png/full/185-1858014_legend-of-zelda-breath-of-the-wild-png.png"
        alt="fondo-zelda"
      />
      <input type="text" placeholder="Username" ref={inputRef} onChange={handleChange} />
      {message !== '' ? (
        <button onClick={() => login(inputRef.current.value)}>Login</button>
      ) : (
        ''
      )}
    </main>
  );
};

export default Login;
