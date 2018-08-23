import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import { View , TextInput , Text , Button} from 'react-native';
import styles from '../CSS/css';
import DataStore from '../Store/DataStore';

@observer
export default class DisplayPage extends React.Component{
  static navigationOptions = {
    title: 'Input Data',
  };
  
  render(){
    const items = {
      FollowUp: [
        {label:'No',value:5,},
        {label:'Yes', value:0}
      ],
      Duration:  [
        {label:'5 - 10 years',value:2,},
        {label:'11 - 15 years', value:1.5,},
        {label:'16 - 20 years', value:1,},
        {label:'> 20 years', value:0.5,},
      ],
      HDStroke: [
          {label:'No',value:0,},
          {label:'Yes', value:1,},
      ],
      RenInv: [
        {label:'No',value:0,},
        {label:'Microalbumineuria', value:1,},
        {label:'Creatinine > 1.6', value:2,},
        {label:'Creatinine > 4', value:3,},
      ],
      Smoking: [
        {label:'No',value:0,},
        {label:'Yes', value:1,},
        {label:'Related Lung Disease', value:2,},
      ]
    }
    return(
        <View 
          style={{justifyContent: 'space-evenly',flex:1,backgroundColor: '#000000',}}>
            <Text style={styles.text}>HBA1C:</Text>
            <TextInput
              style={styles.tb}
              keyboardType={"numeric"}
              placeholder={DataStore.hlthParams.hba1c.toString()}
              onChangeText={(text) => DataStore.updateHBA1C(text)}/>
            <Text style={styles.text}>Serum Cholestrol:</Text>
            <TextInput
              style={styles.tb}
              keyboardType={"numeric"}
              placeholder={DataStore.hlthParams.serchol.toString()}
              onChangeText={(text) => DataStore.updateSerChol(text)}/>
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'Renal Involvement',
                value:null,
              }}
              items={items.RenInv}
              value={DataStore.hlthParams.reninv}
              onValueChange={(value) => DataStore.updateRenInv(value)} />
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'Smoking',
                value:null,
              }}
              items={items.Smoking}
              value={DataStore.hlthParams.smoke}
              onValueChange={(value) => DataStore.updateSmoke(value)} />
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'Duration',
                value:null,
              }}
              items={items.Duration}
              value={DataStore.hlthParams.dur}
              onValueChange={(value) => DataStore.updateDur(value)} />
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'History of Coronary Artery Disease/Stroke',
                value:null,
              }}
              items={items.HDStroke}
              value={DataStore.hlthParams.cordis}
              onValueChange={(value) => DataStore.updateHisCorDis(value)} />
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'Good Follow-up, Once in 3 Months',
                value:null,
              }}
              items={items.FollowUp}
              value={DataStore.hlthParams.gfu}
              onValueChange={(value) => DataStore.updateRegFollowUp(value)} />
            <Text style={styles.text}>Number of years:</Text>
            <TextInput
              style={styles.tb}
              keyboardType={"numeric"}
              placeholder={DataStore.hlthParams.years.toString()}
              onChangeText={(text) => DataStore.updateNoOfYears(parseInt(text))}/>
            <Button
              style={styles.button}
              title="Done"
              onPress={()=>{
                DataStore.generateFutureRetina();
                this.props.navigation.navigate('Image');}} />
{/*          <Text style={styles.touchable}>Image Selected: {DataStore.imageSelected.id}</Text>          
          <Button
            style={styles.button}
            title="BRS"
            onPress={()=>{this.props.navigation.navigate('Years`')}} />
          <Text style={styles.touchable}>HBA1C: {DataStore.hlthParams.hba1c}</Text>
          <Text style={styles.touchable}>Serum Cholestrol: {DataStore.hlthParams.serchol}</Text>
          <Text style={styles.touchable}>Renal Involvement: {DataStore.hlthParams.reninv}</Text>
          <Text style={styles.touchable}>Smoking: {DataStore.hlthParams.smoke}</Text>
          <Text style={styles.touchable}>Duration: {DataStore.hlthParams.dur}</Text>
          <Text style={styles.touchable}>Coronary Artery Disease/Stroke: {DataStore.hlthParams.cordis}</Text>
          <Text style={styles.touchable}>Good follow-up: {DataStore.hlthParams.gfu}</Text>
          <Text style={styles.touchable}>No. of years: {DataStore.hlthParams.years}</Text>
          <Button
            style={styles.button}
            title="Next"
            onPress={() => this.props.navigation.navigate('BRS')} />*/}
        </View>
    );
  }
}