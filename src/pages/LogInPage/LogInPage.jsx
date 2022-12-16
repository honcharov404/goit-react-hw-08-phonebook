import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from 'redux/userSlice/operations';

import s from './LogInPage.module.css';

const LogInPage = () => {
  const user = useSelector(state => state.user.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const onSubmit = e => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  const onChangeEmail = e => {
    const email = e.target.value;

    setEmail(email);
  };

  const onChangePassword = e => {
    const pass = e.target.value;

    setPassword(pass);
  };

  useEffect(() => {
    if (token) {
      navigate('/contacts');
    }
  }, [user, navigate, token]);

  return (
    <div>
      <form className={s.form} onSubmit={onSubmit}>
        <p className={s.text}>Email</p>
        <input
          className={s.input}
          type="text"
          name="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
        <p className={s.text}>Password</p>
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <div>
          <button className={s.btn} type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogInPage;
