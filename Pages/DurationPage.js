import React, { Component } from 'react';
import { View, Button , Text} from 'react-native';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';
import styles from '../CSS/css';
import RNPickerSelect from 'react-native-picker-select';

@observer
export default class DurationPage extends React.Component{
  static navigationOptions = {
    title: 'Duration',
  };

  constructor(props){
    super(props);
    this.state = {Duration:undefined,};
  }

  _handlePress = () => {
    if(this._validateInput()){
      DataStore.updateDur(this.state.Duration);
      this.props.navigation.navigate('HDStroke');
    }
  }

  _validateInput = () =>{
    if(this.state.Duration == undefined){
      alert("Invalid input");
      return false;
    }
    return true;
  }

  _getLabelDuration = (val,items) => {
    switch(val){
      case 2:
        return '5 - 10 years';
      case 1.5
    }
  }

  render(){
    const items = [
      {label:'5 - 10 years',value:2,},
      {label:'11 - 15 years', value:1.5,},
      {label:'16 - 20 years', value:1,},
      {label:'> 20 years', value:0.5,},
    ];
    const val = (this.state.Duration == undefined)?<Text></Text>:<View style={{alignContent:'center'}}><Text style={styles.text}>Duration: {this.state.Duration}</Text></View>;
    return(
      <View
        style={styles.container}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{label:'Duration',value:null}}
            items={items}
            value={this.state.Duration}
            onValueChange={(value) => this.setState({Duration:value})} />
          <Button
            style={styles.button}
            title="Next"
            onPress={() => this._handlePress()}/>
          {val}
      </View>
    );
  }
}