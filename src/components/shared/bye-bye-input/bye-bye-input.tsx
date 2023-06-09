import React, {useState} from 'react';
import {
  Image,
  KeyboardTypeOptions,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import {heightPercentageToDP} from '../../../utils/dimensions';
import {ICONS} from '../../../config/constants/icons';
import {COLORS} from '../../../config/constants/colors';

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
          },
          error && touched ? styles.textInputContainerError : null,
          {width: width},
        ]}>
        <View style={styles.row}>
          <TextInput
            onBlur={() => {
              onBlur?.();
              setTouched(true);
              setIsFocus(false);
            }}
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
          {rightAccessory ? (
            <Pressable
              hitSlop={20}
              onPress={onRightAccessoryPress}
              style={styles.accessory}>
              {rightAccessory}
            </Pressable>
          ) : showClear ? (
            <Pressable onPress={onClear}>
              <Image
                source={ICONS.close}
                style={{
                  width: heightPercentageToDP(1.9704433497536946),
                  height: heightPercentageToDP(1.9704433497536946),
                }}
              />
            </Pressable>
          ) : null}
        </View>
      </Pressable>
      <Text numberOfLines={2} style={styles.errorText}>
        {error && touched ? error : ''}
      </Text>
    </>
  );
};
export default ByeByeInput;
