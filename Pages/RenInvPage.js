import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../CSS/css';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class RenInvPage extends React.Component{
  static navigationOptions = {
    title: 'Renal Involvement',
  };

  constructor(props){
    super(props);
    this.state = {RenInv:{value:undefined,label:undefined}};
  }

  _validateInput = () =>{
    if(this.state.RenInv.value == undefined){
      alert("Invalid input");
      return false;
    }
    return true;
  }
    
  _handlePress = () => {
    if(this._validateInput()){
      DataStore.updateRenInv(this.state.RenInv);
      this.props.navigation.navigate('Smoking');
    }
  }

  _getLabelRenInv = (val,items) => {
    switch(val){
      case 3:
        return items[3].label;
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
      {label:'Microalbumineuria', value:1,},
      {label:'Creatinine > 1.6', value:2,},
      {label:'Creatinine > 4', value:3,},
    ];

    const val = (this.state.RenInv.value == undefined)?<Text></Text>:<Text style={styles.text}>Renal Involvement: {this.state.RenInv.label}</Text>;

    return(
      <View 
        style={styles.container}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{label:'Renal Involvement',value:null}}
            items={items}
            value={this.state.RenInv.value}
            onValueChange={(val) => this.setState({RenInv:{value:val,label:this._getLabelRenInv(val,items)}})} />
          <Button
            style= {styles.button}
            title="Next"
            onPress={() => this._handlePress()}/>
          <Text style={styles.text}>HBA1C: {DataStore.hlthParams.hba1c}</Text>
          <Text style={styles.text}>Serum Cholestrol: {DataStore.hlthParams.serchol}</Text>
          {val}
      </View>
    );
  }
}
