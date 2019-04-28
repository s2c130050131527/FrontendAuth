import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import Header from './components/Header';
import './styles/main.scss';
import Dash from './components/Dash';
import Project from './components/Project';
import Callback from './components/CallbackPage';

Modal.setAppElement('#root');
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="route-body">
            <Switch>
              <Route exact path="/" component={Dash} />
              <Route exact path="/project" component={Project} />
              <Route exact path="/callback" component={Callback} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
