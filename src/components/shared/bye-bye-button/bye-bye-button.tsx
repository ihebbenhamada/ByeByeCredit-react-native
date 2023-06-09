import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {fontValue, heightPercentageToDP} from '../../../utils/dimensions';
import {COLORS} from '../../../config/constants/colors';
import {FONTS} from '../../../config/constants/fonts';

const ByeByeButton: React.FC<{
  text: String;
  isOutlined?: boolean;
  onClick: () => void;
}> = ({text, isOutlined = false, onClick}) => {
  return (
    <>
      <Pressable
        style={[
          styles.container,
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
    height: heightPercentageToDP(5.911330049261084),
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
