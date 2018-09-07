import React, { Component } from 'react';
import { Picker, Text, View, Button } from 'react-native';
import styles from '../CSS/css';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class HDStrokePage extends React.Component{
  static navigationOptions = {
    title: 'History of Coronary Artery Disease / Stroke',
  };

  constructor(props){
    super(props);
    this.state = {HisCorDis:undefined};
  }

  _handlePress = () => {
    if(this._validateInput()){
      DataStore.updateHisCorDis(this.state.HisCorDis);
      this.props.navigation.navigate('Follow_Up');
    }
  }
  
  _validateInput = () => {
    if(this.state.HisCorDis == undefined){
      alert("Invalid input");
      return false;
    }
    return true;
  }

  _getLabelHisCorDis = (val,items) => {
    if(val == 0)
      return items[0].label;
    return items[1].label;
  }


  render(){
    const items = [
      {label:'No',value:0,},
      {label:'Yes', value:1,},
    ];
    const val = (this.state.HisCorDis == undefined)?<Text></Text>:<View style={{alignContent:'center'}}><Text style={styles.text}>History of Coronary Artery Disease / Stroke: {this._getLabelHisCorDis(this.state.HisCorDis,items)}</Text></View>;
    return(
      <View
        style={styles.container}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{label:'History of Coronary Artery Disease/Stroke',value:null}}
            items={items}
            value={this.state.HisCorDis}
            onValueChange={(value) => this.setState({HisCorDis:value})} />
          <Button
            style={styles.button}
            title="Next" 
            onPress={() => this._handlePress()}/>
            {val}
      </View>
    );
  }
}