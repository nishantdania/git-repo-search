import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Homepage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
