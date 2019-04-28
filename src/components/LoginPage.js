import React from 'react';
import loginImg from '../assets/img/google-4.png';
import loginFb from '../assets/img/fb-login.png';

export default function Login(props) {
  return (
    <div className="disp-flex center col">
      <div className="disp-flex has-space-btwn">
        <span>Login with Google or Facebook</span>
        <span
          className="button cancel x"
          onClick={() => props.close()}
          role="presentation"
        >
          X
        </span>
      </div>
      <div className="inline-block">
        <a href="http://localhost:3000/api/login">
          <img src={loginImg} alt="img" className="login-img" />
        </a>
      </div>
      <div className="inline-block">
        <a href="http://localhost:3000/api/login/facebook">
          <img src={loginFb} alt="img" className="login-img fb" />
        </a>
      </div>
      <div>
        <button
          className="button cancel"
          type="button"
          onClick={() => props.close()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
