import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Main, Root } from '../pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/main" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default App;
