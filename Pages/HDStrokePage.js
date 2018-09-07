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
    this.state = {HisCorDis:{value:undefined,label:undefined}};
  }

  _handlePress = () => {
    if(this._validateInput()){
      DataStore.updateHisCorDis(this.state.HisCorDis);
      this.props.navigation.navigate('Follow_Up');
    }
  }
  
  _validateInput = () => {
    if(this.state.HisCorDis.value == undefined){
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
    const val = (this.state.HisCorDis.value == undefined)?<Text></Text>:<Text style={styles.text}>History of Coronary Artery Disease / Stroke: {this.state.HisCorDis.label}</Text>;
    return(
      <View
        style={styles.container}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{label:'History of Coronary Artery Disease/Stroke',value:null}}
            items={items}
            value={this.state.HisCorDis.value}
            onValueChange={(val) => this.setState({HisCorDis:{value:val,label:this._getLabelHisCorDis(val,items)}})} />
          <Button
            style={styles.button}
            title="Next" 
            onPress={() => this._handlePress()}/>
          <Text style={styles.text}>HBA1C: {DataStore.hlthParams.hba1c}</Text>
          <Text style={styles.text}>Serum Cholestrol: {DataStore.hlthParams.serchol}</Text>
          <Text style={styles.text}>Renal Involvement: {DataStore.hlthParams.reninv.label}</Text>
          <Text style={styles.text}>Smoking: {DataStore.hlthParams.smoke.label}</Text>
          <Text style={styles.text}>Duration: {DataStore.hlthParams.dur.label}</Text>
          {val}
      </View>
    );
  }
}