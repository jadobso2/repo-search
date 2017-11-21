import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/header';
import Search from '../containers/search';
import Result from '../containers/result';

const App = () => (
  <main>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' component={ Search } />
        <Route path='/repo/:owner/:name' component={ Result } />
      </Switch>
    </div>
  </main>
);

export default App;
