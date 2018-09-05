import React, { Component } from 'react';
<<<<<<< HEAD
import { TextInput, View, Button } from 'react-native';
=======
import { TextInput, View, Button , Text} from 'react-native';
>>>>>>> Lab
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';
import styles from '../CSS/css';

@observer
export default class YearsPage extends React.Component{
<<<<<<< HEAD
    static navigationOptions = {
        title: 'Years',
      };
      
    constructor(props){
        super(props);
        this.state = {Years:''};
    }

    _handlePress = () =>{
        DataStore.updateNoOfYears(this.state.Years);
        this.props.navigation.navigate('Image');
    }

    render(){
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
            </View>
        );
    }
=======
  static navigationOptions = {
    title: 'Years',
  };
      
  constructor(props){
    super(props);
    this.state = {Years:undefined};
  }

  _handlePress = () =>{
    DataStore.updateNoOfYears(this.state.Years);
    this.props.navigation.navigate('Image');
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
            {val}
        </View>
    );
  }
>>>>>>> Lab
}