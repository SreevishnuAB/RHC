import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
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
    this.state = {Years:''};
  }

  _handlePress = () =>{
    DataStore.updateNoOfYears(this.state.Years);
    DataStore.generateFutureRetina();
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
}