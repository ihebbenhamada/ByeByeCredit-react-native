import React, {ReactNode} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {fontValue, heightPercentageToDP} from "../../../utils/dimensions";
import {COLORS} from "../../../config/constants/colors";

interface checkboxProps {
    checked?: boolean;
    disabled?: boolean;
    label: ReactNode;
    onChange?: (value: boolean) => void;
    styleContainer?: boolean;
    smallContainer?: boolean;
    stylesWidth?: Object;
}

const Checkbox: React.FC<checkboxProps> = ({
                                               checked = false,
                                               label,
                                               disabled,
                                               onChange,
                                               styleContainer,
                                               smallContainer,
                                               stylesWidth,
                                           }) => {


    const toggle = () => {
        if (onChange) {
            onChange(!checked);
        }
    };

    return (
        <Pressable
            disabled={disabled}
            onPress={toggle}
            style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
            }}>
            <Pressable onPress={toggle} style={[styles.box, {
                backgroundColor: checked ? COLORS.blue : COLORS.white,
                borderWidth: checked ? 0 : fontValue(1),
            }]}>
                {checked && (
                    <Feather name={'check'} size={fontValue(20)} color={COLORS.white}/>
                )}
            </Pressable>
            {label}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    box: {
        height: heightPercentageToDP(2.955665024630542),
        width: heightPercentageToDP(2.955665024630542),
        borderRadius: fontValue(6),
        borderColor: COLORS.gray4,
        marginTop: 2,
        marginRight: 10,
        marginLeft: 8,

        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Checkbox;
