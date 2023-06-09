import {StyleSheet} from 'react-native';
import {fontValue, heightPercentageToDP} from '../../../utils/dimensions';
import {COLORS} from '../../../config/constants/colors';
import {FONTS} from '../../../config/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: heightPercentageToDP(1.477832512315271),
  },
  label: {
    fontWeight: '600',
    fontSize: fontValue(14),
    color: COLORS.black,
    fontFamily: FONTS.inter.regular,
  },
  radioSelected: {
    width: heightPercentageToDP(1.9704433497536946),
    height: heightPercentageToDP(1.9704433497536946),
    borderRadius: 16,
    borderWidth: 5,
    borderColor: COLORS.blue,
  },
  radioUnselected: {
    width: heightPercentageToDP(1.9704433497536946),
    height: heightPercentageToDP(1.9704433497536946),
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: COLORS.gray,
  },
});
