import {StyleSheet} from 'react-native';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../../../utils/dimensions';
import {COLORS} from '../../../../../config/constants/colors';
import {FONTS} from '../../../../../config/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    height: heightPercentageToDP(45.241379310344826),
    width: widthPercentageToDP(86.93333333333332),
    paddingHorizontal: widthPercentageToDP(6.933333333333333),
    paddingVertical: heightPercentageToDP(2.955665024630542),
  },
  header: {
    height: heightPercentageToDP(5.41871921182266),
    borderRadius: fontValue(24),
    backgroundColor: COLORS.gray3,
    paddingHorizontal: widthPercentageToDP(4.266666666666667),
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: heightPercentageToDP(1),
  },
  searchInput: {
    width: '88%',
    fontSize: fontValue(14),
    fontWeight: '400',
    fontFamily: FONTS.inter.regular,
    color: COLORS.black,
  },
  list: {
    paddingLeft: widthPercentageToDP(8.533333333333333),
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(1.9704433497536946),
  },
  countryName: {
    fontSize: fontValue(14),
    fontWeight: '400',
    color: COLORS.black3,
    fontFamily: FONTS.inter.regular,
  },
  flag: {
    fontSize: fontValue(14),
    fontWeight: '400',
    fontFamily: FONTS.inter.regular,
    marginRight: widthPercentageToDP(3.2),
  },
  modalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP(45.241379310344826),
    margin: 0,
  },
  searchIcon: {
    height: heightPercentageToDP(1.9704433497536946),
    width: heightPercentageToDP(1.9704433497536946),
  },
  cancel: {
    fontWeight: '600',
    fontSize: fontValue(16),
    color: COLORS.black,
    fontFamily: FONTS.inter.regular,
    textAlign: 'center',
    marginTop: heightPercentageToDP(2),
  },
});
