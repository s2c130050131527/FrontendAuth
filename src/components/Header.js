import React from 'react';
import { NavLink as Link } from 'react-router-dom';
// import loginImg from '../assets/img/google-login-3.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="tabs  disp-flex">
        <div className="tab-container">
          <ul>
            <Link
              exact
              to="/"
              className="tab"
              activeClassName="active selector"
            >
              Home
            </Link>
            <Link
              exact
              to="/project"
              className="tab"
              activeClassName="active selector"
            >
              Project
            </Link>
          </ul>
        </div>
        {/* <div className="login-container">
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={loginImg} alt="Login" />
          </a>
        </div> */}
      </div>
    );
  }
}

export default Header;
