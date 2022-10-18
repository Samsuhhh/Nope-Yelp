import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import Footer from '../Footer/Footer';
import nopewhite from '../../assets/nope-white.png'
import unhappy from '../../assets/imgs/unhappy.png'
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
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
        <div className="sign-up-and-image">
          <div>
          <form className="sign-up-form" onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div>
              <input
                id="first-name-input"
                type='text'
                name='first_name'
                placeholder='First Name'
                onChange={updateFirstName}
                value={firstName}
              ></input>
              <input
                id="last-name-input"
                type='text'
                name='last_name'
                placeholder='Last Name'
                onChange={updateLastName}
                value={lastName}
              ></input>
            </div>

            <div>
              <input
                id="username-input"
                type='text'
                name='username'
                placeholder='Username'
                onChange={updateUsername}
                value={username}
              ></input>
            </div>
            <div>
              <input
                id="email-input"
                type='text'
                name='email'
                placeholder='Email'
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
            <div>
              <input
                id="password-input"
                type='password'
                name='password'
                placeholder='Password'
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div>
              <input
                id="password-input"
                type='password'
                name='repeat_password'
                placeholder='Confirm Password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
            <button id="signup-submit-button" type='submit'>Sign Up</button>
          </form>
          </div>
          <img id="unhappy-img" src={unhappy} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpForm;
