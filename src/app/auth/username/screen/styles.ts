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
  label: {
    fontWeight: '700',
    fontSize: fontValue(14),
    color: COLORS.black1,
    fontFamily: FONTS.inter.regular,
  },
  setName: {
    fontWeight: '400',
    fontSize: fontValue(14),
    color: COLORS.black3,
    fontFamily: FONTS.inter.regular,
  },
  age: {
    fontWeight: '400',
    fontSize: fontValue(13),
    color: COLORS.pink,
    fontFamily: FONTS.inter.regular,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: heightPercentageToDP(1.5315270935960592),
  },

  haveAccount: {
    fontSize: fontValue(13),
    fontWeight: '400',
    color: COLORS.black3,
    fontFamily: FONTS.inter.regular,
  },
  login: {
    fontSize: fontValue(14),
    fontWeight: '600',
    color: COLORS.blue,
    fontFamily: FONTS.inter.regular,
  },
  input: {width: widthPercentageToDP(40)},
  keyboardAvoidingView: {flex: 1, backgroundColor: COLORS.white},
});