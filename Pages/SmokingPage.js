import React, { Component } from 'react';
import { View, Button , Text} from 'react-native';
import styles from '../CSS/css';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class SmokingPage extends React.Component{
  static navigationOptions = {
    title: 'Smoking',
  };

  constructor(props){
    super(props);
    this.state = {Smoking:undefined};
  }

  _validateInput = () =>{
    if(this.state.Smoking == undefined){
      alert("Invalid input");
      return false;
    }
    return true;
  }

  _handlePress = () => {
    if(this._validateInput()){
      DataStore.updateSmoke(this.state.Smoking);
      this.props.navigation.navigate('Duration');
    }
  }

  render(){
    const items = [
      {label:'No',value:0,},
      {label:'Yes', value:1,},
      {label:'Related Lung Disease', value:2,},
    ];
    const val = (this.state.Smoking == undefined)?<Text></Text>:<View style={{alignContent:'center'}}><Text style={styles.text}>Smoking: {this.state.Smoking}</Text></View>;
    return(
      <View
        style={styles.container}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{label:'Smoking',value:null}}
            items={items}
            value={this.state.Smoking}
            onValueChange={(value) => this.setState({Smoking:value})} />
          <Button
            style={styles.button}
            title="Next" 
            onPress={() => {this._handlePress()}}/>
            {val}
      </View>
    );
  }
}