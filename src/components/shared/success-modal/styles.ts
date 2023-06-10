import {StyleSheet} from "react-native";
import {fontValue, heightPercentageToDP, widthPercentageToDP} from "../../../utils/dimensions";
import {COLORS} from "../../../config/constants/colors";
import {FONTS} from "../../../config/constants/fonts";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        height: heightPercentageToDP(41.502463054187196),
        width: widthPercentageToDP(86.93333333333332),
        paddingHorizontal: widthPercentageToDP(2.666666666666667),
        paddingVertical: heightPercentageToDP(2.955665024630542),
        alignItems: "center"
    },

    modalContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: heightPercentageToDP(45.241379310344826),
        margin: 0,
    },
    image: {
        height: heightPercentageToDP(15.64039408866995),
        width: heightPercentageToDP(15.64039408866995),
        backgroundColor: COLORS.blue,
        borderRadius: heightPercentageToDP(15.64039408866995),
        alignItems: "center",
        justifyContent: "center"
    },
    success: {
        width: widthPercentageToDP(15.969333333333332),
        height: heightPercentageToDP(5.9930049261083746)
    },
    congratsText: {
        fontWeight: '900',
        fontSize: fontValue(20),
        color: COLORS.black,
        fontFamily: FONTS.inter.regular,
        textAlign: "center",
    },
    congratsDescription: {
        fontWeight: '400',
        fontSize: fontValue(14),
        color: COLORS.blue,
        fontFamily: FONTS.inter.regular,
        textAlign: "center",
        flex: 1
    },
    btnStyle: {width: '100%'}
});
