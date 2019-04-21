import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './styles/main.scss';
import Dash from './components/Dash';
import Project from './components/Project';

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
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
