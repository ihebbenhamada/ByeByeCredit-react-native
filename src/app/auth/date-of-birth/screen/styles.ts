import {StyleSheet} from 'react-native';
import {fontValue, heightPercentageToDP, widthPercentageToDP,} from '../../../../utils/dimensions';
import {COLORS} from '../../../../config/constants/colors';
import {FONTS} from '../../../../config/constants/fonts';

export const styles = StyleSheet.create({
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
