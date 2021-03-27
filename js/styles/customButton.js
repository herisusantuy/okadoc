import {StyleSheet} from 'react-native';
import {colors} from './default';
import {moderateScale} from '../helper/UIScale';

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: moderateScale(50),
    justifyContent: 'center',
    borderRadius: moderateScale(5),
    alignItems: 'center',
    marginRight: moderateScale(5),
    marginVertical: moderateScale(5),
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
