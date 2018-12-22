import React, { Component } from 'react';
import 'es6-symbol/implement';
import { createStackNavigator } from 'react-navigation';
import BRSPage from './Pages/BRSPage';
import DemoPage from './Pages/DemoPage' ;
import HBA1CPage from './Pages/HBA1CPage';
import SerumCholPage from './Pages/SerumCholPage';
import RenInvPage from './Pages/RenInvPage';
import SmokingPage from './Pages/SmokingPage';
import DurationPage from './Pages/DurationPage';
import HDStrokePage from './Pages/HDStrokePage';
import FollowUpPage from './Pages/FollowUpPage';
import DisplayPage from './Pages/DisplayPage';
import YearsPage from './Pages/YearsPage';

const Root = createStackNavigator({
  BRS: BRSPage,
  HBA1C: HBA1CPage,
  SerChol: SerumCholPage,
  RenInv: RenInvPage,
  Smoking: SmokingPage,
  Duration: DurationPage,
  HDStroke: HDStrokePage,
  Follow_Up: FollowUpPage,
  Years: YearsPage,
  Display:DisplayPage,
  Image: DemoPage,
  },
  {
    initialRouteName: 'BRS',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3d3d3d',
      },
      headerTintColor: '#ffffff',
    }
  }
);

export default class App extends React.Component {
  render(){
    return <Root/>;
  }
}


