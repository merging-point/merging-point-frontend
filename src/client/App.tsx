import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Root, Report, Main } from '../pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/report" component={Report} />
      <Route exact path="/main" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default App;
