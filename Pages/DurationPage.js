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
    this.state = {duration:{value:undefined,label:undefined}};
  }

  _handlePress = () => {
    if(this._validateInput()){
      DataStore.updateDuration(this.state.duration);
      this.props.navigation.navigate('HDStroke');
    }
  }

  _validateInput = () =>{
    if(this.state.duration.value == undefined){
      alert("Invalid input");
      return false;
    }
    return true;
  }

  _getLabelDuration = (val,items) => {
    switch(val){
      case 2:
        return items[0].label;
      case 1.5:
        return items[1].label;
      case 1:
        return items[2].label;
      case 0.5:
        return items[3].label;
      default:
        return 0;
    }
  }

  render(){
    const items = [
      {label:'5 - 10 years',value:2,},
      {label:'11 - 15 years', value:1.5,},
      {label:'16 - 20 years', value:1,},
      {label:'> 20 years', value:0.5,},
    ];
    const val = (this.state.duration.value == undefined)?<Text></Text>:<Text style={styles.text}>Duration: {this.state.duration.label}</Text>;
    return(
      <View
        style={styles.container}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{label:'Duration',value:null}}
            items={items}
            value={this.state.duration.value}
            onValueChange={(val) => this.setState({duration:{value:val,label:this._getLabelDuration(val,items)}})} />
          <Button
            style={styles.button}
            title="Next"
            onPress={() => this._handlePress()}/>
          <Text style={styles.text}>HBA1C: {DataStore.hlthParams.hba1c}</Text>
          <Text style={styles.text}>Serum Cholestrol: {DataStore.hlthParams.serchol}</Text>
          <Text style={styles.text}>Renal Involvement: {DataStore.hlthParams.reninv.label}</Text>
          <Text style={styles.text}>Smoking: {DataStore.hlthParams.smoking.label}</Text>
          {val}
      </View>
    );
  }
}