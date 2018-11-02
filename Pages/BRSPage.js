import React, { Component } from 'react';
import { Alert, View, TouchableOpacity , Image , Dimensions , Modal , Text } from 'react-native';
import GridView from 'react-native-super-grid';
import ImageZoom from 'react-native-image-pan-zoom';
import { observer } from 'mobx-react';
import DataStore from '../Store/DataStore';
import styles from '../CSS/css';

@observer
export default class BRSPage extends React.Component{
  static navigationOptions = {
    title: 'Base Retina Score',
  };

  constructor(props){
    super(props);
    this.state = {modalVisible: false, imgId:'', isReady:false};
  }

  componentWillMount(){
    this._fetchImages();
    Alert.alert("Warning!","Make sure you have an active internet connection",[{text: "OK",onPress:()=>{this.setState({isReady:true});}}]);
  }

  _fetchImages = () => {
    for(i=1;i<=100;i++)
      Image.prefetch('https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+i+'.jpg');
  }

  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  _handlePress = (id) => {
    DataStore.updateImageSelected(id);
    this.props.navigation.navigate('HBA1C');
  }

  render(){
    let items = Array.apply(null, Array(100)).map((v, i) => {
      return {id: (i+1), src: 'https://res.cloudinary.com/sv22/image/upload/v1533932127/'+(i+1)+'.jpg' }
      }
    );
    if(this.state.isReady)
    return(
      <View>
        <GridView
          style={{backgroundColor:'#000000'}}
          horizontal={true}
          itemDimension={95}
          items={items}
          spacing={7}
          renderItem={(item) => {
            return(
              <TouchableOpacity
                onPress={()=>{this._handlePress(item.id)}}
                onLongPress={() => {
                  this.setState({imgId:item.id})
                  this._setModalVisible(!this.state.modalVisible);
                }}>
                  <Image
                    style={styles.thumbs}
                    source={{uri:item.src}}/>  
              </TouchableOpacity>
            );
          }}/>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(!this.state.modalVisible)}}>
            <View style={{backgroundColor:'#000000'}}>
              <ImageZoom
                cropWidth={Dimensions.get('window').width}
                cropHeight={Dimensions.get('window').height}
                imageWidth={Dimensions.get('window').width}
                imageHeight={Dimensions.get('window').width}>
                  <Image
                    style={styles.images}
                    source={{uri:'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+this.state.imgId+'.jpg'}}/>
              </ImageZoom>
            </View>
        </Modal>
      </View>
    );
    return(<View style={styles.container}></View>);
  }
}