import {StyleSheet} from 'react-native';
import {fontValue, heightPercentageToDP, widthPercentageToDP} from '../../../../utils/dimensions';
import {COLORS} from "../../../../config/constants/colors";
import {FONTS} from "../../../../config/constants/fonts";

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
    setPrivacyPolicy: {
        fontWeight: '400',
        fontSize: fontValue(14),
        color: COLORS.black3,
        fontFamily: FONTS.inter.regular,
        lineHeight: 20,
        flex: 1
    },
    normalText: {
        fontWeight: '400',
        fontSize: fontValue(12),
        color: COLORS.gray4,
        fontFamily: FONTS.inter.regular,
        lineHeight: 20,
    },
    blueText: {
        fontWeight: '400',
        fontSize: fontValue(12),
        color: COLORS.blue,
        fontFamily: FONTS.inter.regular,
        lineHeight: 20,
    },
    btnAccept: {
        marginTop: heightPercentageToDP(6.527093596059114)
    }

});
