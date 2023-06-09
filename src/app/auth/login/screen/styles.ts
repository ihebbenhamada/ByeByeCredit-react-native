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
  logo: {
    height: heightPercentageToDP(24.63054187192118),
    width: heightPercentageToDP(24.63054187192118),
    alignSelf: 'center',
  },
  welcome: {
    fontSize: fontValue(24),
    fontWeight: '900',
    fontFamily: FONTS.inter.regular,
  },
  forgetPasswoed: {
    fontSize: fontValue(14),
    fontWeight: '600',
    color: COLORS.blue,
    fontFamily: FONTS.inter.regular,
  },
  createAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  firstTime: {
    fontSize: fontValue(13),
    fontWeight: '400',
    color: COLORS.black3,
    fontFamily: FONTS.inter.regular,
  },
  createAccount: {
    fontSize: fontValue(14),
    fontWeight: '600',
    color: COLORS.blue,
    fontFamily: FONTS.inter.regular,
  },
  divider: {
    height: 0.5,
    backgroundColor: COLORS.gray1,
  },
  or: {
    fontWeight: '400',
    fontSize: fontValue(14),
    color: COLORS.black3,
    textAlign: 'center',
    fontFamily: FONTS.inter.regular,
  },
});
