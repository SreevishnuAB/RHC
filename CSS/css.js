import { StyleSheet , Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    tb: {
      color: '#ffffff',
      width:"100%",
      height: 50,
      borderColor: '#ffffff',
      borderWidth: 1,
    },
    button: {
      marginHorizontal:10,
      width:'200px',
      height:50,
    },
    picker: {
      color: '#ffffff',
      marginTop:'10%',
      height:50,
      width:200,
      borderColor: '#ffffff',
      borderWidth: 1,
    },
    inputAndroid: {
      color: '#ffffff',
    },
    text: {
      color: '#ffffff',
      paddingTop:20,
    },
    images: {
      height:Dimensions.get('window').width,
      width:Dimensions.get('window').width,
    },
    thumbs: {
      height:Dimensions.get('window').height/5,
      width:Dimensions.get('window').height/5,
      borderColor:'#626262',
      borderWidth:1,
    },
  });

  export default styles;