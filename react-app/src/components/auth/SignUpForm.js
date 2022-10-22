import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import Footer from '../Footer/Footer';
import nopewhite from '../../assets/nope-white.png'
import unhappy from '../../assets/imgs/unhappy.png'
import speechbox from '../../assets/imgs/speechbox.svg'
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [firstNameErr, setFirstNameErr] = useState("")
  const [lastNameErr, setLastNameErr] = useState("")
  const [usernameErr, setUsernameErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const [noErr, setNoErr] = useState(true)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    if (firstName.length < 2) {
      setFirstNameErr("*First name cannot be less than 2 characters")
      setNoErr(false)
    }
    if (lastName.length < 2) {
      setLastNameErr("*Last name cannot be less than 2 characters")
      setNoErr(false)
    }
    if (username.length < 6) {
      setUsernameErr("*Username cannot be less than 6 characters")
      setNoErr(false)
    }
    if (password.length < 6) {
      setPasswordErr("*Password cannot be less than 6 characters")
      setNoErr(false)
    }

    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  useEffect(()=> {
    setNoErr(true)
  },[noErr])
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

        <div id="error-box">
          {!firstNameErr.length
          &&!lastNameErr.length
          &&!usernameErr.length
          &&!passwordErr.length &&
          (<div id="no-errs-message">Enter your information on the right!</div>)}
          <div>
            {(!!firstNameErr.length && firstNameErr)}
          </div>
          <div>
            {(!!lastNameErr.length && lastNameErr)}
          </div>
          <div>
            {(!!usernameErr.length && usernameErr)}
          </div>
          <div>
            {(!!passwordErr.length && passwordErr)}
          </div>
        </div>
      <div className="sign-up-form-wrapper">
        <img id="unhappy-img" src={unhappy} />
        <img id="speechbox-img" src={speechbox} />
        <div className="sign-up-and-image">
          <div>
            <form className="sign-up-form" onSubmit={onSignUp}>
              <div>
                <div>

                </div>
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
                  type='email'
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

        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpForm;
