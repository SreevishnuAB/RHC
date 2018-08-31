import React, { Component } from 'react';
import { View, Button, Text} from 'react-native';
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
        this.state = {RenInv:undefined,RenInvLbl:''};
    }

    _getRenInvLabel = (value) => {
        switch(value){
            case 0:
                return "No";
            case 1:
                return "Microalbumineria";
            case 2:
                return "Creatinine > 1.6";
            case 3:
                return "Creatinine > 4";
        }
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
            {label:'No',value:0,},
            {label:'Microalbumineuria', value:1,},
            {label:'Creatinine > 1.6', value:2,},
            {label:'Creatinine > 4', value:3,},
        ];
        return(
            <View 
                style={styles.container}>
                <RNPickerSelect 
                    style={{...styles}}
                    placeholder={{
                        label:'Renal Involvement',
                        value:null,
                        }}
                    items={items}
                    value={this.state.RenInv}
                    onValueChange={(value) => {
                        this.setState({RenInv:value,RenInvLbl:this._getRenInvLabel(value)});
                    }} />
                <Button
                    style= {styles.button}
                    title="Next"
                    onPress={() => this._handlePress()}/>
                <Text style={styles.text}>Renal Involvement: {this.state.RenInvLbl}</Text>
            </View>
        );
    }
}
