/*
 * @Author: your name
 * @Date: 2021-05-11 17:25:32
 * @LastEditTime: 2021-05-11 18:05:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /github/react-demo/src/Router/index.tsx
 */
import {Switch, Route,Redirect } from 'react-router-dom';
import React,{ FC } from 'react';
import {Home,About,Core} from '../pages'

export const Router: FC = () => (
<Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Home" component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Core" component={Core}/>
      <Redirect from="/" to="/"/>
</Switch>
  )