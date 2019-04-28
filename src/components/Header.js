/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './LoginPage';

class Header extends React.Component {
  constructor(props) {
    super(props);
    let userObj;
    try {
      userObj = JSON.parse(localStorage.getItem('userObj'));
    } catch (err) {
      userObj = false;
    }
    this.state = {
      authenticated: userObj,
      modalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen, authenticated } = this.state;
    return (
      <div className="tabs  disp-flex">
        <Modal
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
          className="login-modal"
        >
          <Login close={this.closeModal} />
        </Modal>
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
        <div className="login-container">
          {authenticated ? (
            <div>
              <img src={authenticated.imageUrl} alt="img" />
            </div>
          ) : (
            <button
              type="button"
              className="button login"
              onClick={this.openModal}
            >
              Login
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
