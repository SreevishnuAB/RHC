import React, { Component } from 'react';
import { TextInput, View, Button , Text} from 'react-native';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';
import styles from '../CSS/css';

@observer
export default class YearsPage extends React.Component{
  static navigationOptions = {
    title: 'Years',
  };
      
  constructor(props){
    super(props);
    this.state = {Years:undefined};
  }

  _handlePress = () =>{
    if(this.state.Years == undefined || this.state.Years == 0)
      alert("Invalid input");
    else{
    DataStore.updateNoOfYears(this.state.Years);
    DataStore.generateFutureRetina();
    this.props.navigation.navigate('Image');
    }
  }

  render(){
    const val = (this.state.Years == undefined)?<Text></Text>:<View style={{alignContent:'center'}}><Text style={styles.text}>Years: {this.state.Years}</Text></View>;
    return(
      <View
        style={styles.container}>
          <TextInput
            style={styles.tb}
            keyboardType={"numeric"}
            placeholder="Enter number of years"
            onChangeText={(text) => this.setState({Years : parseInt(text)})}/>
          <Button                
            style={styles.button}
            title="Next"
            onPress={() => this._handlePress()}/>
                    <Text style={styles.text}>HBA1C: {DataStore.hlthParams.hba1c}</Text>
          <Text style={styles.text}>Serum Cholestrol: {DataStore.hlthParams.serchol}</Text>
          <Text style={styles.text}>Renal Involvement: {DataStore.hlthParams.reninv.label}</Text>
          <Text style={styles.text}>Smoking: {DataStore.hlthParams.smoke.label}</Text>
          <Text style={styles.text}>Duration: {DataStore.hlthParams.dur.label}</Text>
          <Text style={styles.text}>History of Coronary Artery Disease/Stroke: {DataStore.hlthParams.cordis.label}</Text>
          <Text style={styles.text}>Good Follow-Up, Once in 3 Months: {DataStore.hlthParams.gfu.label}</Text>
          {val}  
      </View>
    );
  }
}