import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {heightPercentageToDP} from '../../../utils/dimensions';
import {COLORS} from '../../../config/constants/colors';
import {ICONS} from '../../../config/constants/icons';
import {Spacer} from '../index';

const SocialLogin: React.FC<{}> = ({}) => {
  return (
    <View style={styles.socialContainer}>
      <Pressable
        style={[
          styles.socialItem,
          {
            backgroundColor: COLORS.pink,
          },
        ]}>
        <Image source={ICONS.google} style={styles.socialLogo} />
      </Pressable>
      <Spacer width={3.2} />
      <Pressable
        style={[
          styles.socialItem,
          {
            backgroundColor: COLORS.black,
          },
        ]}>
        <Image source={ICONS.apple} style={styles.socialLogo} />
      </Pressable>
      <Spacer width={3.2} />
      <Pressable
        style={[
          styles.socialItem,
          {
            backgroundColor: COLORS.blue,
          },
        ]}>
        <Image source={ICONS.facebook} style={styles.socialLogo} />
      </Pressable>
    </View>
  );
};

export default SocialLogin;
const styles = StyleSheet.create({
  socialItem: {
    height: heightPercentageToDP(4.926108374384237),
    width: heightPercentageToDP(4.926108374384237),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLogo: {
    height: heightPercentageToDP(1.477832512315271),
    width: heightPercentageToDP(1.477832512315271),
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
