import React, { Component } from 'react';
import { View, Text, TouchableOpacity , Image , Dimensions} from 'react-native';
import PhotoGrid from 'react-native-image-grid';
import styles from '../CSS/css';

export default class BRSPage extends React.Component{
  static navigationOptions = {
    title: 'Base Retina Score',
  };
  
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    let items = Array.apply(null, Array(100)).map((v, i) => {
      return {id: i, src: 'https://res.cloudinary.com/praveenpi/image/upload/v1524920749/'+(i+1)+'.jpg' }
    });
    this.setState({ items });
  }

  _handlePress = () => {
    this.props.navigation.navigate('HBA1C');
  }
  renderItem(item, itemSize) {
    return(
      <TouchableOpacity
        key = { item.id }
        style = {{ width: itemSize, height: itemSize}}>
        <Image
          onPress = {this._handlePress}
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: item.src }}
        />
      </TouchableOpacity>
    )
  }

  render(){
/*    return(
      <View
        style={styles.container}>
        <Text style={styles.text}>Base Retina Score *TODO* </Text>
        <Button
          style={styles.button}
          title="Next" 
          onPress={() => this.props.navigation.navigate('HBA1C')} />
      </View>
    );*/
    return(
      <PhotoGrid
        data = { this.state.items }
        itemsPerRow = { 3 }
        itemMargin = { 1 }
        itemPaddingHorizontal={1}
        renderItem = { this.renderItem }
      />
    );
  }
}