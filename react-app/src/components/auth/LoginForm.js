import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Footer from '../Footer/Footer';
import nopewhite from '../../assets/nope-white.png'
import unhappy from '../../assets/imgs/unhappy.png'
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='sign-up-header'>
        <a href="/"><img id="signup-logo" src={nopewhite} /></a>
      </div>
      <div className="sign-up-form-wrapper">
        <div className="login-and-image">
          <form onSubmit={onLogin}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div id="input-space">
              <input
                id="login-email-input"
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div id="input-space">
              <input
                id="login-password-input"
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
              <button id="login-submit-button" type='submit'>Login</button>
              <button
                id='login-submit-button'
                type='submit'
                onClick={() => {
                  setEmail('CarlMaki@email.com')
                  setPassword('password')
                }}
              >Login as Demo User</button>
            </div>
          </form>
          <img id="unhappy-img" src={unhappy} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginForm;
