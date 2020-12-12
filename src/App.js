import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/profile" component={Profile} />
        {/*
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/admin" component={Admin}/>
        */}
      </Switch>
    </>
  );
}

export default App
