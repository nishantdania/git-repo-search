import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SearchPage from './components/SearchPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/search' component={SearchPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
