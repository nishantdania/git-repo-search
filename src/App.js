import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SearchPage from './components/SearchPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/search' component={SearchPage}/>
          <Route path='/' component={Homepage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
