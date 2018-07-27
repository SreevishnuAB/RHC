import React, { Component } from 'react';
import { Picker, Text, View, Button } from 'react-native';
import styles from './CSS/css';
import RNPickerSelect from 'react-native-picker-select';

export default class FollowUpPage extends React.Component{
    static navigationOptions = {
        title: 'Good Follow-up',
      };

    constructor(props){
        super(props);
        this.state = {FollowUp:undefined,
            items:[
                {label:'No',value:'5',},
                {label:'Yes', value:'0',},
            ],
        };
    }

    _validateInput = () =>{
        if(this.state.FollowUp == undefined){
            alert("Invalid input");
            return false;
        }
        return true;
    }
    render(){
        const text=<Text></Text>;
        return(
            <View style={styles.container}>
            <RNPickerSelect 
                placeholder={{
                    label:'Good Follow-up, Once in 3 Months',
                    value:null,
                    }}
                items={this.state.items}
                value={this.state.FollowUp}
                onValueChange={(value) => {this.setState({FollowUp:value});}} />
            <Button style={styles.button} title="Next" onPress={() => {if(this._validateInput())this.props.navigation.navigate('Image')}}/>
            </View>
        );
    }
}