import React, { Component } from 'react';
import { Text, TextInput, View, Button , Slider , Dimensions} from 'react-native';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';
import styles from '../CSS/css';

@observer
export default class HBA1CPage extends React.Component{
  static navigationOptions = {
    title: 'HBA1C',
  };
  
  constructor(props){
    super(props);
    this.state = {hba1c:5,view:false};
  }

  _validateInput = () =>{
    if(this.state.hba1c == '' || this.state.HBA1C<5){
      alert("Invalid input");
      return false;
    }
    return true;
  }

  _handlePress = () =>{
    if(this._validateInput()){
//      DataStore.updateHBA1C(parseFloat(this.state.HBA1C));
      this.props.navigation.navigate('SerChol');
    }
  }

  render(){
    const val = (!this.state.view)?<Text></Text>:<Text style={styles.text}>HBA1C: {DataStore.hlthParams.hba1c}</Text>;
    return(
      <View
        style={styles.container}>
{/*
          <TextInput
            style={styles.tb}
            keyboardType={"numeric"}
            placeholder="Enter HBA1C value"
            onChangeText={(text) => this.setState({HBA1C : text})}/>
*/}
          <Slider
            style={{width:Dimensions.get('window').width,height:100}}
            maximumValue={16}
            minimumValue={5}
            onValueChange={(value)=>this.setState({hba1c:value})}
            onSlidingComplete={()=>{
              this.setState({view:true});
              DataStore.updateHBA1C(parseInt(this.state.hba1c*10)/10)
            }}
            step={0.1}
            value={this.state.hba1c}
            thumbTintColor='#ffffff'
            maximumTrackTintColor='#ffffff'
            />
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.text}>5</Text>
            <Text style={styles.text}>HBA1C: {parseInt(this.state.hba1c*10)/10}</Text>
            <Text style={styles.text}>16</Text>
          </View>
          <Button                
            style={styles.button}
            title="Next"
            onPress={() => this._handlePress()}/>
          {val}
      </View>
    );
  }
}