import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on iPhone 8 Plus 5.5" screen mobile device
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 736;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
