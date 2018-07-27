import React, { Component } from 'react';
import { Picker, Text, View, Button } from 'react-native';
import styles from './CSS/css';
import RNPickerSelect from 'react-native-picker-select';

export default class DurationPage extends React.Component{
    static navigationOptions = {
        title: 'Duration',
      };

    constructor(props){
        super(props);
        this.state = {Duration:undefined,
            items:[
                {label:'5 - 10 years',value:'2',},
                {label:'11 - 15 years', value:'1.5',},
                {label:'16 - 20 years', value:'1',},
                {label:'> 20 years', value:'0.5',},
            ],
        };
    }

    _validateInput = () =>{
        if(this.state.Duration == undefined){
            alert("Invalid input");
            return false;
        }
        return true;
    }

    render(){
        return(
            <View style={styles.container}>
            <RNPickerSelect 
                placeholder={{
                    label:'Duration',
                    value:null,
                    }}
                items={this.state.items}
                value={this.state.Duration}
                onValueChange={(value) => {this.setState({Duration:value});}} />
            <Button style={styles.button} title="Next" onPress={() => {if(this._validateInput())this.props.navigation.navigate('HDStroke')}}/>
            </View>
        );
    }
}