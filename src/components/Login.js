import React from 'react';
import "./Login.css";
import {Button} from '@material-ui/core';
import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from "../firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();
  console.log('state: ', state);
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('result:', result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://logosmarcas.net/wp-content/uploads/2020/11/Slack-Emblema.png' alt=''/>
            <h1>Sign in to Clever Programmer HQ</h1>
            <p>cleverprogrammer.slack.com</p>
            <Button onClick={signIn}>Sign In With Google</Button>
        </div>
    </div>
  )
}

export default Login