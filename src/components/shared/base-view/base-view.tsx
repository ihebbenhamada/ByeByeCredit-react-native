import React from 'react';
import {
  Keyboard,
  Pressable,
  StatusBar,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {COLORS} from '../../../config/constants/colors';
import {heightPercentageToDP} from '../../../utils/dimensions';

const BaseView: React.FC<{children: any; style?: ViewStyle}> = ({
  children,
  style,
}) => {
  return (
    <>
      <Pressable style={[styles.container, style]} onPress={Keyboard.dismiss}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'rgba(0,0,0,0.0)'}
        />
        {children}
      </Pressable>
    </>
  );
};

export default BaseView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: heightPercentageToDP(5.41871921182266),
  },
});
