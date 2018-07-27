import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import styles from './CSS/css';

export default class HBA1CPage extends React.Component{
    static navigationOptions = {
        title: 'HBA1C',
      };
    constructor(props){
        super(props);
        this.state = {HBA1C:''};
    }
    _validateInput = () =>{
        if(this.state.HBA1C == '' || this.state.HBA1C<5){
            alert("Invalid input");
            return false;
        }
        return true;
    }

    render(){
        return(
            <View style={styles.container}>
            <TextInput style={styles.tb} keyboardType={"numeric"} placeholder="Enter HBA1C value" onChangeText={(text) => {this.setState({HBA1C : text})}}/>
            <Button style={styles.button} title="Next" onPress={() => {if(this._validateInput())this.props.navigation.navigate('SerChol')}}/>
            </View>
        );
    }
}