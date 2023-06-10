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
        textAlign: "center",
    },
    setProfilePic: {
        fontWeight: '400',
        fontSize: fontValue(14),
        color: COLORS.black3,
        fontFamily: FONTS.inter.regular,
        textAlign: "center",
        paddingHorizontal: widthPercentageToDP(10)
    },
    imagePlaceholder: {
        height: heightPercentageToDP(12.31527093596059),
        width: heightPercentageToDP(12.31527093596059),
        alignSelf: 'center',
        borderRadius: fontValue(24)
    },
    divider: {
        height: 0.5,
        backgroundColor: COLORS.gray1,
    },
});
