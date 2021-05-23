import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Root, Report, Main, Register, Notification } from '../pages';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/report" component={Report} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/notification" component={Notification} />
    </Switch>
  </BrowserRouter>
);

export default App;
