import React, { Component } from 'react';
import { Slider, Text , TextInput, View, Button , Dimensions} from 'react-native';
import styles from '../CSS/css';
import {  observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class SerumCholPage extends React.Component{
  static navigationOptions = {
    title: 'Serum Cholestrol',
  };

  constructor(props){
    super(props);
    this.state = {SC:100};
  }

  _handlePress = () => {
    if(this._validateInput()){
      this.props.navigation.navigate('RenInv');
    }
  }

  _validateInput = () =>{
    if(this.state.SC == ''){
      alert("Invalid input");
      return false;
    }
    return true;
  }
    
  render(){
    return(
      <View
        style={styles.container}>
{/* 
          <TextInput
            style={styles.tb}
            keyboardType={"numeric"}
            placeholder="Enter Serum Cholestrol value"
            onChangeText={(text) => this.setState({SC : text})}/>
*/}
          <Slider
            style={{width:Dimensions.get('window').width,height:100}}
            maximumValue={300}
            minimumValue={100}
            onValueChange={(value)=>this.setState({SC:value})}
            onSlidingComplete={()=>DataStore.updateSerChol(this.state.SC)}
            step={1}
            value={this.state.SC}
            thumbTintColor='#ffffff'/>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.text}>100</Text>
            <Text style={styles.text}>Serum Cholestrol: {this.state.SC}</Text>
            <Text style={styles.text}>300</Text>
          </View>
          <Button
            style={styles.button}
            title="Next"
            onPress={() => this._handlePress()}/>
          <Text style={styles.text}>HBA1C: {DataStore.hlthParams.hba1c}</Text>
      </View>
    );
  }
}