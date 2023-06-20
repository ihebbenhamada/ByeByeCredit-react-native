import {StyleSheet} from 'react-native';
import {COLORS} from '../../../config/constants/colors';
import {FONTS} from '../../../config/constants/fonts';
import {fontValue, heightPercentageToDP, widthPercentageToDP,} from '../../../utils/dimensions';

const styles = StyleSheet.create({
    labels: {
        color: COLORS.black4,
        fontFamily: FONTS.inter.regular,
        fontSize: fontValue(12),
        fontWeight: '400'
    },
    labelsError: {
        color: 'red',
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textInputContainer: {
        height: heightPercentageToDP(7.389162561576355),
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: widthPercentageToDP(4.266666666666667),
        paddingTop: heightPercentageToDP(1.293103448275862),
        paddingBottom: heightPercentageToDP(1.293103448275862)


    },
    textInputContainerError: {
        borderColor: 'red',
    },
    iconContainer: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    accessory: {},
    errorText: {
        fontSize: fontValue(11),
        lineHeight: fontValue(13),
        width: '100%',
        paddingTop: heightPercentageToDP(0.5),
        color: 'red',
    },
    textInput: {
        fontSize: fontValue(14),
        fontWeight: '400',
        width: '100%',
        fontFamily: FONTS.inter.regular,
    },
    textInputWithAccessory: {
        width: '100%',
    },
    textInputWithClear: {
        width: '100%',
    },
});

export default styles;
