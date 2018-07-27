import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './CSS/css';

export default class BRSPage extends React.Component{
  static navigationOptions = {
    title: 'Base Retina Score',
  };
  
  render(){
    return(
      <View style={styles.container}>
        <Text>Base Retina Score *TODO* </Text>
        <Button style={styles.button} title="Next" onPress={() => this.props.navigation.navigate('HBA1C')} />
      </View>
    );
  }
}