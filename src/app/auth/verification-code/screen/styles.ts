import {StyleSheet} from 'react-native';
import {fontValue, heightPercentageToDP, widthPercentageToDP} from '../../../../utils/dimensions';
import {COLORS} from "../../../../config/constants/colors";
import {FONTS} from "../../../../config/constants/fonts";

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
        textAlign: "center",
    },
    setVerifCode: {
        fontWeight: '400',
        fontSize: fontValue(14),
        color: COLORS.black3,
        fontFamily: FONTS.inter.regular,
        textAlign: "center",
        paddingHorizontal: widthPercentageToDP(10)
    },
    options: {
        marginBottom: heightPercentageToDP(2.5),
        paddingHorizontal: widthPercentageToDP(6.4),
    },
    option: {
        paddingLeft: widthPercentageToDP(4.266666666666667),
        fontWeight: '600',
        fontSize: fontValue(14),
        color: COLORS.blue,
        fontFamily: FONTS.inter.regular,
        lineHeight: 27
    },
    dontReceiveCode: {
        fontWeight: '400',
        fontSize: fontValue(14),
        color: COLORS.black3,
        fontFamily: FONTS.inter.regular,
        lineHeight: 25
    },
    input: {
        height: heightPercentageToDP(5.911330049261084),
    },
    codeFiledRoot: {
        justifyContent: 'center',
    },
    cell: {
        alignItems: 'center',
        justifyContent: 'center',
        width: heightPercentageToDP(5.911330049261084),
        height: heightPercentageToDP(5.911330049261084),
        borderWidth: 1,
        borderColor: COLORS.gray,
        borderRadius: fontValue(12),
        marginHorizontal: 4,
        textAlign: "center"
    },
    numberText: {
        fontSize: fontValue(14),
        textAlign: 'center',
        fontFamily: FONTS.inter.regular,
        fontWeight: '400',
        color: COLORS.black
    },
});
