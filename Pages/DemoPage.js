import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Dimensions, Modal } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import styles from '../CSS/css';
import DataStore from '../Store/DataStore';

export default class DemoPage extends React.Component{
  static navigationOptions = {
    title: 'Image Screen',
  };
  constructor(props){
    super(props);
    this.state = {imgNum:'',url:'',modalVisible:false};
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
    this._displayImage();
    this._setModalVisible(!this.state.modalVisible);
  }

  render() {
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
              source={{uri:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+DataStore.imageSelected.id+'.jpg'}}/>
        </ImageZoom>
        </View>
      </Modal>);  
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
      <View style={{backgroundColor: '#000000',height:Dimensions.get('window').height}}>
      <TouchableOpacity
        onPress={() => {
          this._setModalVisible(!this.state.modalVisible);
          }}>
           <Image
            style={{marginTop:60,height:Dimensions.get('window').width,width:Dimensions.get('window').width}}
            source={{uri:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+DataStore.imageSelected.id+'.jpg'}}/>  
      </TouchableOpacity>
      {img}
      </View>
    );
  }
}
