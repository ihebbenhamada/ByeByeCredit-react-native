import React from 'react';
import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {fontValue, heightPercentageToDP} from '../../../utils/dimensions';
import {COLORS} from '../../../config/constants/colors';
import {FONTS} from '../../../config/constants/fonts';

const ByeByeButton: React.FC<{
    text: string;
    isOutlined?: boolean;
    onClick: () => void;
    style?: ViewStyle;
}> = ({text, isOutlined = false, onClick, style}) => {
    return (
        <>
            <Pressable
                style={[
                    styles.container,
                    style,
                    {
                        backgroundColor: isOutlined ? COLORS.white : COLORS.blue,
                        borderWidth: isOutlined ? 1 : 0,
                    },
                ]}
                onPress={onClick}>
                <Text
                    style={[
                        styles.text,
                        {color: isOutlined ? COLORS.blue : COLORS.white},
                    ]}>
                    {text}
                </Text>
            </Pressable>
        </>
    );
};

export default ByeByeButton;
const styles = StyleSheet.create({
    container: {
        height: heightPercentageToDP(7.389162561576355),
        borderColor: COLORS.blue,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: FONTS.inter.regular,
        fontWeight: '700',
        fontSize: fontValue(14),
        textAlign: 'center',
    },
});
