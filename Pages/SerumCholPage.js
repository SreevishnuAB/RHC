import React, { Component } from 'react';
import { TextInput, View, Button } from 'react-native';
import styles from '../CSS/css';
import {  observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class SerumCholPage extends React.Component{
    static navigationOptions = {
        title: 'Serum Cholestrol',
      };

    constructor(props){
        super(props);
        this.state = {SC:''};
    }

    _handlePress = () => {
        if(this._validateInput()){
            DataStore.updateSerChol(parseFloat(this.state.SC));
            this.props.navigation.navigate('RenInv');
        }
    }

    _validateInput = () =>{
        if(this.state.SC == ''){
            alert("Invalid input");
            return false;
        }
        return true;
    }
    
    render(){
        return(
            <View
                style={styles.container}>
                <TextInput
                    style={styles.tb}
                    keyboardType={"numeric"}
                    placeholder="Enter Serum Cholestrol value"
                    onChangeText={(text) => this.setState({SC : text})}/>
                <Button
                    style={styles.button}
                    title="Next"
                    onPress={() => this._handlePress()}/>
            </View>
        );
    }
}