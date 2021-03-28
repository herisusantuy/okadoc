import {StyleSheet} from 'react-native';
import {colors} from './default';
import {moderateScale} from '../helper/UIScale';

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(200),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: moderateScale(15),
    color: colors.mainColor,
  },
  logo: {
    resizeMode: 'center',
    height: moderateScale(90),
    width: '90%',
  },
  doctor: {
    resizeMode: 'center',
    width: '100%',
    height: '95%',
  },
  doctorContainer: {
    justifyContent: 'center',
    paddingBottom: moderateScale(15),
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: moderateScale(20),
    height: moderateScale(300),
  },
  inputContainer: {
    justifyContent: 'space-between',
    height: moderateScale(300),
    paddingHorizontal: moderateScale(15),
  },
  input: {
    borderRadius: moderateScale(5),
    borderColor: 'skyblue',
    borderWidth: 1,
    padding: moderateScale(10),
  },
  resultContainer: {
    justifyContent: 'center',
    marginBottom: moderateScale(10),
    height: moderateScale(250),
    paddingVertical: moderateScale(5),
  },
  errorText: {
    textAlign: 'center',
    fontSize: moderateScale(18),
    color: colors.red,
  },
  resultTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: colors.mainColor,
    marginVertical: moderateScale(10),
    textAlign: 'center',
  },
  resultText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginVertical: moderateScale(5),
    textAlign: 'center',
  },
});

export default styles;
