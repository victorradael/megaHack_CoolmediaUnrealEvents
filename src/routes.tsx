import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Global from './styles/global';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import EventPage from './pages/EventPage';
import ListEvents from './pages/ListEvents';
import EventRegister from './pages/EventRegister';

export default function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={LogIn} />
        <Route path="/user/profile" component={Profile} />
        <Route path="/eventPage" component={EventPage} />
        <Route path="/events" component={ListEvents} />
        <Route path="/event/register" component={EventRegister} />
      </Switch>
      <Global />
    </BrowserRouter>
  );
}
