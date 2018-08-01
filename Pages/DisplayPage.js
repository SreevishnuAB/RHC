import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../CSS/css';
import DataStore from '../Store/DataStore';

export default class DisplayPage extends React.Component{
  static navigationOptions = {
    title: 'Input Data',
  };
  
  render(){
    return(
      <View 
        style={styles.container}>
        <Text>HBA1C: {DataStore.hlthparams.hba1c}</Text>
        <Text>Serum Cholestrol: {DataStore.hlthparams.serchol}</Text>
        <Text>Renal Involvement: {DataStore.hlthparams.reninv}</Text>
        <Text>Smoking: {DataStore.hlthparams.smoke}</Text>
        <Text>Duration: {DataStore.hlthparams.dur}</Text>
        <Text>Coronary Artery Disease/Stroke: {DataStore.hlthparams.cordis}</Text>
        <Text>Good follow-up: {DataStore.hlthparams.gfu}</Text>
        <Button
          style={styles.button}
          title="Next"
          onPress={() => this.props.navigation.navigate('Image')} />
      </View>
    );
  }
}