import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../CSS/css';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class SmokingPage extends React.Component{
    static navigationOptions = {
        title: 'Smoking',
      };

    constructor(props){
        super(props);
        this.state = {Smoking:undefined,SmokingLbl:''};
    }

    _validateInput = () =>{
        if(this.state.Smoking == undefined){
            alert("Invalid input");
            return false;
        }
        return true;
    }

    _handlePress = () => {
        if(this._validateInput()){
            DataStore.updateSmoke(this.state.Smoking);
            this.props.navigation.navigate('Duration');
        }
    }

    _getSmokingLabel = (value) => {
        switch(value){
            case 0:
                return 'No';
            case 1:
                return 'Yes';
            case 2:
                return 'Related Lung Disease';
        }
    }

    render(){

        const items = [
            {label:'No',value:0,},
            {label:'Yes', value:1,},
            {label:'Related Lung Disease', value:2,},
        ];

        return(
            <View
                style={styles.container}>
                <RNPickerSelect 
                    style={{...styles}}
                    placeholder={{
                        label:'Smoking',
                        value:null,
                    }}
                    items={items}
                    value={this.state.Smoking}
                    onValueChange={(value) => this.setState({Smoking:value,SmokingLbl:this._getSmokingLabel(value)})} />
                <Button
                    style={styles.button}
                    title="Next" 
                    onPress={() => {this._handlePress()}}/>
                <Text style={styles.text}>Smoking: {this.state.SmokingLbl}</Text>
            </View>
        );
    }
}