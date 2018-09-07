import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { observer } from 'mobx-react';
import {Slider, ScrollView , View , TextInput , Text , Button , Dimensions} from 'react-native';
import styles from '../CSS/css';
import DataStore from '../Store/DataStore';

@observer
export default class DisplayPage extends React.Component{
  static navigationOptions = {
    title: 'Input Data',
  };
  
  constructor(props){
    super(props);
    this.state = {SC:DataStore.hlthParams.serchol,HBA1C:DataStore.hlthParams.hba1c};
  }

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
      <View style={{justifyContent: 'space-between',flex:1,backgroundColor: '#000000',}}>
        <ScrollView 
          style={{flex:1,backgroundColor: '#000000',}}
          keyboardDismissMode='on-drag'>
            <Slider
            style={{width:Dimensions.get('window').width,height:100}}
            maximumValue={12}
            minimumValue={5}
            onValueChange={(value)=>this.setState({HBA1C:(parseInt(value*10))/10})}
            onSlidingComplete={()=>DataStore.updateHBA1C(this.state.HBA1C)}
            step={0.1}
            value={DataStore.hlthParams.hba1c}
            thumbTintColor='#ffffff'/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.text}>5</Text>
              <Text style={styles.text}>HBA1C: {this.state.HBA1C}</Text>
              <Text style={styles.text}>12</Text>
            </View>
            <Slider
              style={{width:Dimensions.get('window').width,height:100}}
              maximumValue={300}
              minimumValue={100}
              onValueChange={(value)=>this.setState({SC:value})}
              onSlidingComplete={()=>DataStore.updateSerChol(this.state.SC)}
              step={1}
              value={this.state.SC}
              thumbTintColor='#ffffff'/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.text}>100</Text>
              <Text style={styles.text}>Serum Cholestrol: {this.state.SC}</Text>
              <Text style={styles.text}>300</Text>
            </View>
            <Text style={styles.text}>Number of years:</Text>
            <TextInput
              style={styles.tb}
              keyboardType={"numeric"}
              placeholder={DataStore.hlthParams.years.toString()}
              onChangeText={(text) => DataStore.updateNoOfYears(parseInt(text))}/>
            <Text style={styles.text}>Renal Involvement:</Text>
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'Renal Involvement',
                value:null,
              }}
              items={items.RenInv}
              value={DataStore.hlthParams.reninv.value}
              onValueChange={(val) => DataStore.updateRenInv({value:val,label:undefined})} />
            <Text style={styles.text}>Smoking:</Text>
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'Smoking',
                value:null,
              }}
              items={items.Smoking}
              value={DataStore.hlthParams.smoke.value}
              onValueChange={(val) => DataStore.updateSmoke({value:val,label:undefined})} />
            <Text style={styles.text}>Duration:</Text>
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'Duration',
                value:null,
              }}
              items={items.Duration}
              value={DataStore.hlthParams.dur.value}
              onValueChange={(val) => DataStore.updateDur({value:val,label:undefined})} />
            <Text style={styles.text}>History of Coronary Artery Disease/Stroke:</Text>
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'History of Coronary Artery Disease/Stroke',
                value:null,
              }}
              items={items.HDStroke}
              value={DataStore.hlthParams.cordis.value}
              onValueChange={(val) => DataStore.updateHisCorDis({value:val,label:''})} />
            <Text style={styles.text}>Good Follow-up, Once in 3 Months:</Text>
            <RNPickerSelect 
              style={{...styles}}
              placeholder={{
                label:'Good Follow-up, Once in 3 Months',
                value:null,
              }}
              items={items.FollowUp}
              value={DataStore.hlthParams.gfu.value}
              onValueChange={(val) => DataStore.updateRegFollowUp({value:val,label:''})} />
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
        </ScrollView>
        <View style={{flex:0.1,backgroundColor:'#000000'}}>
          <Button
            style={styles.button}
            title="Done"
            onPress={()=>{
              DataStore.generateFutureRetina();
              this.props.navigation.navigate('Image')
            }} />
        </View>
      </View>
    );
  }
}