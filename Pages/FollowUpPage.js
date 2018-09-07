import React, { Component } from 'react';
import { View, Button , Text} from 'react-native';
import styles from '../CSS/css';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class FollowUpPage extends React.Component{
  static navigationOptions = {
    title: 'Good Follow-up',
  };

  constructor(props){
    super(props);
    this.state = {FollowUp:undefined,};
  }

  _validateInput = () =>{
    if(this.state.FollowUp == undefined){
      alert("Invalid input");
      return false;
    }
    return true;
  }

  _handlePress = () => {
    if(this._validateInput()){
      DataStore.updateRegFollowUp(this.state.FollowUp);
      this.props.navigation.navigate('Years');
    }
  }

  _getLabelFollowup = (val,items) => {
    if(val == 5)
      return items[0].label;
    return items[1].label;
  }
  render(){
    const items = [
      {label:'No',value:5,},
      {label:'Yes', value:0,},
    ];
    const val = (this.state.FollowUp == undefined)?<Text></Text>:<View style={{alignContent:'center'}}><Text style={styles.text}>Good FollowUp: {this._getLabelFollowup(this.state.FollowUp,items)}</Text></View>;
    return(
      <View
        style={styles.container}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{label:'Good Follow-up, Once in 3 Months',value:null}}
            items={items}
            value={this.state.FollowUp}
            onValueChange={(value) => this.setState({FollowUp:value})} />
          <Button
            style={styles.button}
            title="Next"
            onPress={() => this._handlePress()}/>
            {val}
      </View>
    );
  }
}