import {StyleSheet} from 'react-native';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../../utils/dimensions';
import {COLORS} from '../../../../config/constants/colors';
import {FONTS} from '../../../../config/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPercentageToDP(6.4),
  },
  title: {
    fontWeight: '900',
    fontSize: fontValue(20),
    color: COLORS.black,
    fontFamily: FONTS.inter.regular,
  },
  setCin: {
    fontWeight: '400',
    fontSize: fontValue(14),
    color: COLORS.black3,
    fontFamily: FONTS.inter.regular,
  },
  label: {
    fontWeight: '700',
    fontSize: fontValue(14),
    color: COLORS.black1,
    fontFamily: FONTS.inter.regular,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {width: widthPercentageToDP(48.53333333333333)},
  dateInput: {
    width: widthPercentageToDP(48.53333333333333),
    height: heightPercentageToDP(5.911330049261084),
    borderWidth: 1,
    borderRadius: 12,
    borderColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: COLORS.black4,
    fontWeight: '400',
    fontSize: fontValue(14),
    fontFamily: FONTS.inter.regular,
  },
});
