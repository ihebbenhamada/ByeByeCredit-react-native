import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  selectedValue,
  onValueChange,
}) => {
  const handleValueChange = (value: string) => {
    onValueChange(value);
  };
  return (
    <View style={styles.container}>
      {options.map(option => (
        <Pressable
          key={option.value}
          style={styles.option}
          onPress={() => handleValueChange(option.value)}>
          <Text style={styles.label}>{option.label}</Text>
          {option.value === selectedValue ? (
            <View style={styles.radioSelected} />
          ) : (
            <View style={styles.radioUnselected} />
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default RadioGroup;
