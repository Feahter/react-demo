import {Switch, Route,Redirect } from 'react-router-dom';
import React,{ FC } from 'react';
import Home from '../pages/Home';
import Core from '../pages/Core';
import About from '../pages/About';
export const Router: FC = () => (
<Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Home" component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Core" component={Core}/>
      <Redirect from="/" to="/"/>
</Switch>
  )