import React, { Component } from 'react';
import { Picker, Text, View, Button } from 'react-native';
import styles from '../CSS/css';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class RenInvPage extends React.Component{
    static navigationOptions = {
        title: 'Renal Involvement',
      };

    constructor(props){
        super(props);
        this.state = {RenInv:undefined,
        };
    }

    _validateInput = () =>{
        if(this.state.RenInv == undefined){
            alert("Invalid input");
            return false;
        }
        return true;
    }
    
    _handlePress = () => {
        if(this._validateInput()){
            DataStore.updateRenInv(this.state.RenInv);
            this.props.navigation.navigate('Smoking');
        }
    }

    render(){
        const items = [
            {label:'No',value:'0',},
            {label:'Microalbumineuria', value:'1',},
            {label:'Creatinine > 1.6', value:'2',},
            {label:'Creatinine > 4', value:'3',},
        ];
        return(
            <View 
                style={styles.container}>
                <RNPickerSelect 
                    placeholder={{
                        label:'Renal Involvement',
                        value:null,
                        }}
                    items={items}
                    value={this.state.RenInv}
                    onValueChange={(value) => this.setState({RenInv:value})} />
                <Button
                    style={styles.button}
                    title="Next"
                    onPress={() => this._handlePress()}/>
            </View>
        );
    }
}