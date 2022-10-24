import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import Footer from '../Footer/Footer';
import nopewhite from '../../assets/nope-white.png'
import './SignUpForm.css'
import signupgood from '../../assets/imgs/sign-up-good.png';
import blacknope from '../../assets/nopes/ratingimgblack.png';


const SignUpForm = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // const [userAvatar, setUserAvatar] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showErrors, setShowErrors] = useState('');
  const [userAvatar, setUserAvatar] = useState('https://freesvg.org/img/abstract-user-flat-4.png')
  const [errors, setErrors] = useState([]);

  // const [firstNameErr, setFirstNameErr] = useState("")
  // const [lastNameErr, setLastNameErr] = useState("")
  // const [usernameErr, setUsernameErr] = useState("")
  // const [passwordErr, setPasswordErr] = useState("")
  // const [noErr, setNoErr] = useState(true)

  const updateFirstName = (e) => { setFirstName(e.target.value) };
  const updateLastName = (e) => { setLastName(e.target.value) };
  const updateUsername = (e) => { setUsername(e.target.value) };
  const updateEmail = (e) => { setEmail(e.target.value) };
  const updatePassword = (e) => { setPassword(e.target.value) };
  const updateConfirmPassword = (e) => { setConfirmPassword(e.target.value) };

  useEffect(() => {
    const vErrors = [];

    if (firstName.length < 2 || firstName.length > 15) vErrors.push('First name must be between 2 and 15 characters.')
    if (lastName.length < 2) vErrors.push('Last name must be greater than 2 characters.')
    if (username.length < 5 || username.length > 15) vErrors.push('Username must be between 5 and 15 characters.')
    if (!email.match(/^\S+@\S+\.\S+$/)) vErrors.push('Please enter a valid email address')
    if (password.length < 6 || password.length > 15) vErrors.push('Password must be between 5 and 15 characters.')
    if (password !== confirmPassword) vErrors.push('Password fields do not match!')

    setErrors(vErrors)
  }, [firstName, lastName, username, password, confirmPassword, email])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowErrors(true);

    if (!errors.length) {
      const newUser = {
        first_name: firstName,
        last_name:  lastName,
        email,
        username,
        user_avatar: userAvatar,
        password
      }
      const data = await dispatch(signUp(newUser));

      if (data) {
        setShowErrors(false)
        history.push('/')
      }
    }
  }
  const handleCancel = async (e) => {
    e.preventDefault();
    history.push('/')
  }

  if (user) {
    return <Redirect to='/' />;
  }


  //   const onSignUp = async (e) => {
  //     e.preventDefault();

  //     if (firstName.length < 2) {
  //       errors.push('')
  //     }
  //     if (lastName.length < 2) {
  //       setLastNameErr("*Last name cannot be less than 2 characters")
  //       setNoErr(false)
  //     }
  //     if (username.length < 6) {
  //       setUsernameErr("*Username cannot be less than 6 characters")
  //       setNoErr(false)
  //     }
  //     if (password.length < 6) {
  //       setPasswordErr("*Password cannot be less than 6 characters")
  //       setNoErr(false)
  //     }

  //   })
  //   if (firstName.length < 2) {
  //     errors.push('First name cannot be less than 2 characters')
  //   }

  //   if (password === repeatPassword) {
  //     const data = await dispatch(signUp(firstName, lastName, username, email, password));
  //     if (data) {
  //       setErrors(data)
  //     }
  //   }
  // };

  // useEffect(() => {
  //   setNoErr(true)
  // }, [noErr])




  // if (user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <>
      <div className='sign-up-header'>
        <a href="/"><img alt='white nope' id="signup-logo" src={nopewhite} /></a>
      </div>

      {/* <div id="error-box">
          {!firstNameErr.length
            && !lastNameErr.length
            && !usernameErr.length
            && !passwordErr.length &&
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
        </div> */}

      <div id="sign-up-form-wrapper">
        <div id='signUp-header'>
          Become a Noper!
        </div>

        <div id="signUp-form-left">
          <div id='signUp-form-content'>
            <form className="sign-up-form" onSubmit={handleSubmit}>
              <div className='fragmented-divs-container-address-LL-url'>
                <div className='fragmented-div-styling'>
                  <input
                    id="first-name-input"
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    onChange={updateFirstName}
                    value={firstName}
                  ></input>
                </div>
                <div className='fragmented-div-styling'>
                  <input
                    id="last-name-input"
                    type='text'
                    name='last_name'
                    placeholder='Last Name'
                    onChange={updateLastName}
                    value={lastName}
                  ></input>
                </div>
              </div>
              <div className='create-input-divs'>
                <input
                  className='create-business-input'
                  type='text'
                  name='username'
                  placeholder='Username'
                  onChange={updateUsername}
                  value={username}
                ></input>
              </div>
              <div className='create-input-divs'>
                <input
                  className='signup-input'
                  type='text'
                  name='email'
                  placeholder='Email'
                  onChange={updateEmail}
                  value={email}
                ></input>
              </div>
              <div className='create-input-divs'>
                <input
                  className='signup-input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={updatePassword}
                  value={password}
                ></input>
              </div>
              <div className='create-input-divs'>
                <input
                  className='signup-input'
                  type='password'
                  name='confirm_password'
                  placeholder='Confirm Password'
                  onChange={updateConfirmPassword}
                  value={confirmPassword}
                  required={true}
                ></input>
              </div>
              <div id='action-buttons'>
                <button id="signup-submit-btn" type='submit'>Sign Up</button>
                <button id='signup-cancel-btn' onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>
          <div id='signup-goop-container'>
            <img alt='mini goop' id="mini-goop-img" src={signupgood} />
            {showErrors &&
              <div id={errors.length ? 'signup-validations-div' : 'hidden'}>
                {errors.map((e, i) => {
                  return (
                    <div id='error-div' key={i}>
                      <div>
                        <img alt='black nope' id='bNope' src={blacknope} />
                      </div>
                      {e}
                    </div>
                  )

                })}

              </div>
            }


          </div>
        </div>
        {/* <div id='signUp-form-right-side'>



        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default SignUpForm
