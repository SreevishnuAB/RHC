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
    this.state = {Smoking:{value:undefined,label:undefined}};
  }

  _validateInput = () =>{
    if(this.state.Smoking.value == undefined){
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

  _getLabelSmoking = (val,items) => {
    switch(val){
      case 2:
        return items[2].label;
      case 1:
        return items[1].label;
      default:
        return items[0].label;
    }
  }

  render(){
    const items = [
      {label:'No',value:0,},
      {label:'Yes', value:1,},
      {label:'Related Lung Disease', value:2,},
    ];
    const val = (this.state.Smoking.value == undefined)?<Text></Text>:<Text style={styles.text}>Smoking: {this.state.Smoking.label}</Text>;
    return(
      <View
        style={styles.container}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{label:'Smoking',value:null}}
            items={items}
            value={this.state.Smoking.value}
            onValueChange={(val) => this.setState({Smoking:{value:val,label:this._getLabelSmoking(val,items)}})} />
          <Button
            style={styles.button}
            title="Next" 
            onPress={() => {this._handlePress()}}/>
          <Text style={styles.text}>HBA1C: {DataStore.hlthParams.hba1c}</Text>
          <Text style={styles.text}>Serum Cholestrol: {DataStore.hlthParams.serchol}</Text>
          <Text style={styles.text}>Renal Involvement: {DataStore.hlthParams.reninv.label}</Text>
          {val}
      </View>
    );
  }
}