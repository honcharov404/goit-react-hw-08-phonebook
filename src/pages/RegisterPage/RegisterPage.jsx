import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'redux/userSlice/operations';

import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const onSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password }));
  };

  const onChangeName = e => {
    const name = e.target.value;

    setName(name);
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
  }, [navigate, token]);

  return (
    <div>
      <form className={s.form} onSubmit={onSubmit}>
        <p className={s.text}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={onChangeName}
          required
        />
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
