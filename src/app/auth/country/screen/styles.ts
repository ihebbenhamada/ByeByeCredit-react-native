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
  setCountry: {
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
  searchHint: {
    fontSize: fontValue(14),
    fontWeight: '400',
    color: COLORS.black4,
    fontFamily: FONTS.inter.regular,
  },
  countryName: {
    fontSize: fontValue(14),
    fontWeight: '400',
    color: COLORS.black,
    fontFamily: FONTS.inter.regular,
  },
  countryFlag: {
    fontSize: fontValue(12),
    fontWeight: '400',
    color: COLORS.black,
    fontFamily: FONTS.inter.regular,
    marginRight: widthPercentageToDP(1),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPercentageToDP(5.41871921182266),
    backgroundColor: COLORS.gray3,
    paddingHorizontal: widthPercentageToDP(4.266666666666667),
    borderRadius: fontValue(24),
  },
  searchIcon: {
    height: heightPercentageToDP(1.9704433497536946),
    width: heightPercentageToDP(1.9704433497536946),
  },
});
