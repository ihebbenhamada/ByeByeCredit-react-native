import {StyleSheet} from 'react-native';
import {COLORS} from '../../../config/constants/colors';
import {FONTS} from '../../../config/constants/fonts';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  labels: {
    color: COLORS.black,
    fontFamily: FONTS.inter.regular,
    fontSize: fontValue(12),
  },
  labelsError: {
    color: 'red',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  textInputContainer: {
    height: heightPercentageToDP(5.911330049261084),
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: widthPercentageToDP(4.266666666666667),
  },
  textInputContainerError: {
    borderColor: 'red',
  },
  iconContainer: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessory: {},
  errorText: {
    fontSize: fontValue(11),
    lineHeight: fontValue(13),
    width: '100%',
    paddingTop: heightPercentageToDP(0.5),
    color: 'red',
  },
  textInput: {
    fontSize: fontValue(14),
    fontWeight: '400',
    width: '96%',
    fontFamily: FONTS.inter.regular,
  },
  textInputWithAccessory: {
    width: '80%',
  },
  textInputWithClear: {
    width: '85%',
  },
});

export default styles;
