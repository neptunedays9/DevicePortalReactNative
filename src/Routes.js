import React, {Component} from 'react';

import Login from './components/Login'

import Dashbaord from './components/Dashboard'

import {Router, Stack, Scene} from 'react-native-router-flux'

const Routes = () => {
    return (
      <Router>
          <Stack key="root">
              <Scene key="login" component={Login}></Scene>
              <Scene key="dashboard" component={Dashbaord}></Scene>
          </Stack>
    </Router>
    );
};

export default Routes;