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
    this.state = {serchol:100,view:false};
  }

  _handlePress = () => {
    if(this._validateInput()){
      this.props.navigation.navigate('RenInv');
    }
  }

  _validateInput = () =>{
    if(this.state.serchol == ''){
      alert("Invalid input");
      return false;
    }
    return true;
  }
    
  render(){
    const val = (!this.state.view)?<Text></Text>:<Text style={styles.text}>Serum Cholestrol: {DataStore.hlthParams.serchol}</Text>;
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
            maximumValue={400}
            minimumValue={100}
            onValueChange={(value)=>this.setState({serchol:value})}
            onSlidingComplete={()=>{
              this.setState({view:true});
              DataStore.updateSerChol(this.state.serchol)}}
            step={1}
            value={this.state.serchol}
            thumbTintColor='#ffffff'
            maximumTrackTintColor='#ffffff'
            />
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.text}>100</Text>
            <Text style={styles.text}>Serum Cholestrol: {this.state.serchol}</Text>
            <Text style={styles.text}>400</Text>
          </View>
          <Button
            style={styles.button}
            title="Next"
            onPress={() => this._handlePress()}/>
          <Text style={styles.text}>HBA1C: {DataStore.hlthParams.hba1c}</Text>
          {val}
      </View>
    );
  }
}