import React, { Component } from 'react';
import { TextInput, View, Image, Button, Text, Dimensions, Modal } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import styles from './CSS/css';

export default class DemoPage extends React.Component{
  static navigationOptions = {
    title: 'Image Screen',
  };
  constructor(props){
    super(props);
    this.state = {imgNum:'',clicked:false,url:'',modalVisible:false};
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
    this.setState({clicked:true});
    this._displayImage();
    this._setModalVisible(!this.state.modalVisible);
  }

  render() {
    const img= (this.state.clicked)?(
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(!this.state.modalVisible)}}>
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={Dimensions.get('window').width}
          imageHeight={Dimensions.get('window').width}
          >
            <Image
              style={{height:Dimensions.get('window').width,width:Dimensions.get('window').width,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}
              source={{uri:this.state.url}}/>
        </ImageZoom>
      </Modal>):
      <Text></Text>;  
return (
      <View
        style={styles.container}>
        <TextInput
          style={styles.tb}
          onChangeText={(text)=>{this.setState({imgNum:text})}}
          placeholder='Enter image number'
          keyboardType={'numeric'}
          />
          <Button
            style={styles.button}
            onPress={()=>{this._handlePress();}}
            title='Submit'/>
              {img}
      </View>
    );
  }
}
