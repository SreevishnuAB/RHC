import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Dimensions, Modal , Button , Text} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import styles from '../CSS/css';
import {observer} from 'mobx-react';
import DataStore from '../Store/DataStore';

@observer
export default class DemoPage extends React.Component{
  static navigationOptions = {
    title: 'Image',
  };
  constructor(props){
    super(props);
    this.state = {imgNum:'',url:'',FutureRetinaVisible:false, VisionVisible:false,PresentRetinaVisible:false};
  }

  _setFutureRetinaVisible = (visible) => {
    this.setState({FutureRetinaVisible: visible});
  }

  _setPresentRetinaVisible = (visible) => {
    this.setState({PresentRetinaVisible: visible});
  }

  _setVisionVisible = (visible) => {
    this.setState({VisionVisible:visible});
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
    DataStore.generateFutureRetina();
    const futureimg= (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.FutureRetinaVisible}
        onRequestClose={() => {this._setFutureRetinaVisible(!this.state.FutureRetinaVisible)}}>
        <View style={{backgroundColor:'#000000'}}>
        <ImageZoom
          style={{justifyContent: 'center',alignItems: 'center'}}
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={Dimensions.get('window').width}
          imageHeight={Dimensions.get('window').width}>
            <Image
              style={styles.images}
              source={{uri:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+DataStore.futureRetina.image+'.jpg'}}/>
        </ImageZoom>
        </View>
      </Modal>);
    const presentimg = (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.PresentRetinaVisible}
        onRequestClose={() => {this._setPresentRetinaVisible(!this.state.PresentRetinaVisible)}}>
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
      const visionimg = (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.VisionVisible}
        onRequestClose={() => {this._setVisionVisible(!this.state.VisionVisible)}}>
        <View style={{backgroundColor:'#000000'}}>
        <Text style={styles.text}>placeholder</Text>
           {/*<ImageZoom
            style={{justifyContent: 'center',alignItems: 'center'}}
            cropWidth={Dimensions.get('window').width}
            cropHeight={Dimensions.get('window').height}
            imageWidth={Dimensions.get('window').width}
            imageHeight={Dimensions.get('window').width}>
              <Image
                style={styles.images}
              source={{uri:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+DataStore.imageSelected.id+'.jpg'}}/>
          </ImageZoom>*/}
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
      <View style={{backgroundColor: '#000000',height:Dimensions.get('window').height,justifyContent: 'center',alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          this._setFutureRetinaVisible(!this.state.FutureRetinaVisible)
          }}>
           <Image
            style={{height:Dimensions.get('window').width,width:Dimensions.get('window').width}}
            source={{uri:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+DataStore.futureRetina.image+'.jpg'}}/>  
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Button
          style={styles.button}
          onPress={()=>{this._handlePress()}}
          title='Edit Parameters'/>
      <Button
          style={styles.button}
          onPress={()=>{this._setPresentRetinaVisible()}}
          title='Current Image'/>
      <Button
          style={styles.button}
          onPress={()=>{this._setVisionVisible()}}
          title='Vision'/>
          </View>
      {futureimg}
      {presentimg}
      {visionimg}
      </View>
    );
  }
}

