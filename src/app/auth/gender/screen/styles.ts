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
  keyboardAvoidingView: {flex: 1, backgroundColor: COLORS.white},
  title: {
    fontWeight: '900',
    fontSize: fontValue(20),
    color: COLORS.black,
    fontFamily: FONTS.inter.regular,
  },
  setGender: {
    fontWeight: '400',
    fontSize: fontValue(14),
    color: COLORS.black3,
    fontFamily: FONTS.inter.regular,
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
});
