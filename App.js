import React  from  'react';
import  {
  View,
  Text,
  Image,
  Dimensions
} from  'react-native';

const {width,height}  = Dimensions.get('window');

//guideline sizes on standar 5"
const guidelineBaseWidth  = 350;
const guidelineBaseHeight = 680;

const scale = size  =>  width / guidelineBaseWidth  * size;
const verticalScale = size  =>  height  / guidelineBaseHeight * size;
const moderateScale = (size,  factor  = 0.5)  =>  size  + ( scale(size) - size) * factor;

export  default class App extends React.Component{
  render(){
    return(
      <View style={{backgroundColor:'white',  flex:1, alignItems:'center',  justifyContent:'center'}}>
          <Text style={{fontSize:moderateScale(18),color:'#000'}}>Hello Word</Text>
      </View>
    )
  }
}