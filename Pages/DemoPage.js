import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Dimensions, Modal , Button} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import styles from '../CSS/css';
import {observer} from 'mobx-react';
import DataStore from '../Store/DataStore';
import RNPickerSelect from 'react-native-picker-select';

@observer
export default class DemoPage extends React.Component{
  static navigationOptions = {
    title: 'Image',
  };

  constructor(props){
    super(props);
    DataStore.generateFutureRetina();
    this.state = {imgNum:DataStore.futureRetina.image,url:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+DataStore.futureRetina.image+'.jpg',modalVisible:false};
  }

  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  _displayImage = () => {
    if(this.state.imgNum < 1 || this.state.imgNum > 99)
      alert("Image should be between 1 and 99")
    else
      this.setState({url:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+this.state.imgNum+'.jpg'});
  }

  _handlePress = () =>{
    this.props.navigation.navigate('Display');
  }

  render() {
    const items=[
      {label:"Current Retina",value:DataStore.currentRetina.image},
      {label:"Vision",value:100}
    ];

    const img= (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {this._setModalVisible(!this.state.modalVisible)}}>
        <View style={{backgroundColor:'#000000'}}>
          <ImageZoom
            style={{justifyContent: 'center',alignItems: 'center'}}
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={Dimensions.get('window').width}>
              <Image
                style={styles.images}
                source={{uri:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+this.state.imgNum+'.jpg'}}/>
          </ImageZoom>
        </View>
      </Modal>
    );  
/*return (
      <View
        style={styles.container}>
        <TextInput
          style={styles.tb}
          onChangeText={(text)=>{this.setState({imgNum:text})}}
          placeholder='Enter image number'
          keyboardType={'numeric'}/>
        <Button
          style={styles.button}
          onPress={()=>{this._handlePress();}}
          title='Submit'/>
        {img}
      </View>
    );*/
    return(
      <View
        style={{backgroundColor: '#000000',height:Dimensions.get('window').height,justifyContent: 'flex-start',alignItems: 'center'}}>
          <RNPickerSelect 
            style={{...styles}}
            placeholder={{
              label:'Future Retina',
              value:DataStore.futureRetina.image,
            }}
            items={items}
            value={this.state.imgNum}
            onValueChange={(value) => this.setState({imgNum:value})} />
          <TouchableOpacity
            onPress={() => {
              this._setModalVisible(!this.state.modalVisible);
            }}>
            <Image
              style={{height:Dimensions.get('window').width,width:Dimensions.get('window').width}}
              source={{uri:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+this.state.imgNum+'.jpg'}}/>  
          </TouchableOpacity>
          <Button
            style={styles.button}
            onPress={()=>{this._handlePress();}}
            title='Edit Parameters'/>
          {img}
      </View>
    );
  }
}

