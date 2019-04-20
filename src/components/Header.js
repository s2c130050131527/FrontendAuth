import React from 'react';
import { Tabs, TabList, Tab } from 'react-tabs';
import loginImg from '../assets/img/google-login-3.svg';

class Header extends React.Component {
  render() {
    return (
      <div className="tabs  disp-flex">
        <div className="tab-container">
          <Tabs selectedTabClassName="active selector">
            <TabList className="">
              <Tab className="tab">Home</Tab>
              <Tab className="tab">Project</Tab>
            </TabList>
          </Tabs>
        </div>
        <div className="login-container">
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={loginImg} alt="Login" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
