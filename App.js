import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import BRSPage from './Pages/BRSPage';
import DemoPage from './Pages/DemoPage' ;
import HBA1CPage from './Pages/HBA1CPage';
import SerumCholPage from './Pages/SerumCholPage';
import RenInvPage from './Pages/RenInvPage';
import SmokingPage from './Pages/SmokingPage';
import DurationPage from './Pages/DurationPage';
import HDStrokePage from './Pages/HDStrokePage';
import FollowUpPage from './Pages/FollowUpPage'

const Root = createStackNavigator({
  BRS: BRSPage,
  HBA1C: HBA1CPage,
  SerChol: SerumCholPage,
  RenInv: RenInvPage,
  Smoking:SmokingPage,
  Duration:DurationPage,
  HDStroke:HDStrokePage,
  Follow_Up:FollowUpPage,
  Image: DemoPage,
  },
  {
    initialRouteName: 'BRS',
  }
);

export default class App extends React.Component {
  render(){
  return <Root/>;
  }
}


