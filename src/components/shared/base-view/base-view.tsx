import React from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, Pressable, StatusBar, StyleSheet, ViewStyle,} from 'react-native';
import {COLORS} from '../../../config/constants/colors';
import {heightPercentageToDP, widthPercentageToDP} from '../../../utils/dimensions';

const BaseView: React.FC<{ children: any; style?: ViewStyle }> = ({
                                                                      children,
                                                                      style,
                                                                  }) => {
    return (
        <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
            <Pressable style={[styles.container, style]} onPress={Keyboard.dismiss}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor={'rgba(0,0,0,0.0)'}
                />
                {children}
            </Pressable>
        </KeyboardAvoidingView>
    );
};

export default BaseView;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: heightPercentageToDP(5.41871921182266),
    },
    keyboardAvoidingView: {flex: 1, backgroundColor: COLORS.white, paddingHorizontal: widthPercentageToDP(6.4)},

});
