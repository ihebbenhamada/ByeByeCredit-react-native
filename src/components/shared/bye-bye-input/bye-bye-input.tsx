import React, {useState} from 'react';
import {Image, KeyboardTypeOptions, Pressable, Text, TextInput,} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../config/constants/colors';
import {ICONS} from "../../../config/constants/icons";
import {heightPercentageToDP} from "../../../utils/dimensions";

interface textInputInterface {
    onClear?: () => void;
    showClear?: boolean;
    value?: string;
    numberOfLines?: number;
    width?: number;
    defaultValue?: string;
    onChangeText?: (text: string) => void;
    onBlur?: () => void;
    error?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    editable?: boolean;
    rightAccessory?: any;
    onRightAccessoryPress?: () => void;
    secureTextEntry?: boolean;
    borderBottomColor?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    onPress?: () => void;
}

const ByeByeInput: React.FC<textInputInterface> = ({
                                                       editable = true,
                                                       secureTextEntry,
                                                       showClear = true,
                                                       onClear,
                                                       error,
                                                       placeholder,
                                                       onChangeText,
                                                       defaultValue,
                                                       value,
                                                       onBlur,
                                                       rightAccessory,
                                                       onRightAccessoryPress,
                                                       numberOfLines,
                                                       keyboardType,
                                                       onPress,
                                                       width,
                                                   }) => {
    const [touched, setTouched] = useState<boolean>(false);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const handleFocus = () => {
        setIsFocus(true);
    };
    return (
        <>
            <Pressable
                onPress={onPress}
                style={[
                    styles.textInputContainer,
                    {
                        borderColor: isFocus ? COLORS.blue : COLORS.gray,
                        borderWidth: isFocus ? 1.5 : 1,
                        width: width,
                        justifyContent: 'space-between'
                    },
                    error && touched ? styles.textInputContainerError : null,
                ]}>
                <Pressable style={{
                    height: '100%',
                    width: '90%',
                    justifyContent: value ? 'space-between' : 'center',
                }}>
                    {value ? <Text
                        style={[styles.labels, error && touched ? styles.labelsError : null]}>
                        {value ? placeholder : ' '}
                    </Text> : null
                    }
                    <TextInput
                        onBlur={() => {
                            onBlur?.();
                            setTouched(true);
                            setIsFocus(false);
                        }}
                        onPressIn={onPress}
                        onFocus={handleFocus}
                        keyboardType={keyboardType}
                        numberOfLines={numberOfLines || 1}
                        editable={editable}
                        defaultValue={defaultValue}
                        onChangeText={onChangeText}
                        autoCapitalize="none"
                        secureTextEntry={secureTextEntry}
                        placeholderTextColor={touched && error ? 'red' : COLORS.black4}
                        placeholder={placeholder}
                        value={value}
                        style={[
                            styles.textInput,
                            rightAccessory
                                ? styles.textInputWithAccessory
                                : showClear
                                    ? styles.textInputWithClear
                                    : null,
                        ]}
                    />
                </Pressable>
                {rightAccessory ?
                    <Pressable
                        hitSlop={20}
                        onPress={onRightAccessoryPress}
                        style={styles.accessory}>
                        {rightAccessory}
                    </Pressable> : showClear ? <Pressable onPress={onClear}>
                        <Image source={ICONS.close}
                               style={{height: heightPercentageToDP(1.97), width: heightPercentageToDP(1.97)}}/>
                    </Pressable> : null

                }
            </Pressable>
            <Text numberOfLines={2} style={styles.errorText}>
                {error && touched ? error : ''}
            </Text>
        </>
    );
};
export default ByeByeInput;
