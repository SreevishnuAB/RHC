import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../CSS/css';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class HDStrokePage extends React.Component{
    static navigationOptions = {
        title: 'History of Coronary Artery Disease / Stroke',
      };

    constructor(props){
        super(props);
        this.state = {History:undefined,HisLbl:''};
    }

    _handlePress = () => {
        if(this._validateInput()){
            DataStore.updateHisCorDis(this.state.History);
            this.props.navigation.navigate('Follow_Up');
        }
    }
    _validateInput = () => {
        if(this.state.History == undefined){
            alert("Invalid input");
            return false;
        }
        return true;
    }

    _getHDStrokeLabel = (value) => {
        switch(value){
            case 0:
                return 'No';
            case 1:
                return 'Yes';
        }
    }
    render(){
        const items = [
            {label:'No',value:0,},
            {label:'Yes', value:1,},
        ];

        return(
            <View
                style={styles.container}>
                <RNPickerSelect 
                    style={{...styles}}
                    placeholder={{
                        label:'History of Coronary Artery Disease/Stroke',
                        value:null,
                        }}
                    items={items}
                    value={this.state.History}
                    onValueChange={(value) => this.setState({History:value,HisLbl:this._getHDStrokeLabel(value)})} />
                <Button
                    style={styles.button}
                    title="Next" 
                    onPress={() => this._handlePress()}/>
                <Text style={styles.text}>History of Coronary Artery Disease/Stroke: {this.state.HisLbl}</Text>
            </View>
        );
    }
}