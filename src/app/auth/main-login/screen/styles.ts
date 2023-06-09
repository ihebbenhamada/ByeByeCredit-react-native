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
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: heightPercentageToDP(6.65024630541872),
    width: heightPercentageToDP(6.65024630541872),
    alignSelf: 'center',
  },
  profilePicContainer: {
    height: heightPercentageToDP(17.610837438423648),
    width: heightPercentageToDP(17.610837438423648),
    alignSelf: 'center',
  },
  profilePic: {
    height: heightPercentageToDP(17.610837438423648),
    width: heightPercentageToDP(17.610837438423648),
    alignSelf: 'center',
  },
  username: {
    fontWeight: '700',
    fontSize: fontValue(24),
    color: COLORS.black,
    textAlign: 'center',
    fontFamily: FONTS.inter.regular,
  },
  or: {
    fontWeight: '400',
    fontSize: fontValue(14),
    color: COLORS.black3,
    textAlign: 'center',
    fontFamily: FONTS.inter.regular,
  },
  createAccount: {
    fontFamily: FONTS.inter.regular,
    fontWeight: '600',
    fontSize: fontValue(14),
    color: COLORS.blue,
    textAlign: 'center',
  },
  divider: {
    height: 0.5,
    backgroundColor: COLORS.gray1,
  },
  notificationContainer: {
    height: heightPercentageToDP(2.70935960591133),
    width: heightPercentageToDP(2.70935960591133),
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    position: 'absolute',
    top: heightPercentageToDP(0.7),
    right: heightPercentageToDP(1.5),
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  notificationText: {
    fontWeight: '500',
    fontSize: fontValue(14),
    color: COLORS.white,
    fontFamily: FONTS.inter.regular,
  },
});
