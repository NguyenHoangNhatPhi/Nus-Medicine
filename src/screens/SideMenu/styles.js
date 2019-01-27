import {
  StyleSheet,
  Dimensions
} from 'react-native';

import Configs from '../../configs';
import { scaleSzie } from '../../utils/func';

const {width,height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor :'rgb(51,73,131)',
  },
  containeLogo:{
    height:scaleSzie(170),
  },
  textMenu:{
    color:'#fff',
    fontSize: scaleSzie(16),
    fontWeight :'bold'
  }
})