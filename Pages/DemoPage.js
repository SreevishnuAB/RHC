import React, { Component } from 'react';
import { TextInput, View, Image, Button, Text, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import LightBox from 'react-native-lightbox';
import styles from './CSS/css';

export default class DemoPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {imgNum:'',clicked:false,url:''};
  }

  _displayImage = () => {
    if(this.state.imgNum < 1 || this.state.imgNum > 99)
      alert("Image should be between 1 and 99")
    else
      this.setState({url:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+this.state.imgNum+'.jpg'});
  }

  render() {
    const img= (this.state.clicked)?(
      <LightBox style={{marginTop:10}}>
      <ImageZoom cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height/1.5}
        imageWidth={300}
        imageHeight={300}>
        <Image style={{height:300,width:300}} source={{uri:this.state.url}}/>
        </ImageZoom>
        </LightBox>):
      <Text></Text>;  
return (
      <View style={styles.container}>
        <TextInput style={styles.tb} onChangeText={(text)=>{this.setState({imgNum:text})}} placeholder='Enter image number'/>
        <Button style={styles.button} onPress={()=>{this.setState({clicked:true});this._displayImage();
              }} title='Submit'/>
              {img}
      </View>
    );
  }
}
