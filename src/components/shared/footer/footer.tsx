import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fontValue} from '../../../utils/dimensions';
import {COLORS} from '../../../config/constants/colors';
import {Spacer} from '../spacer';
import {FONTS} from '../../../config/constants/fonts';

const Footer: React.FC<{}> = ({}) => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.title}>Propulsé</Text>
      <Spacer height={0.9852216748768473} />
      <Text style={styles.appName}>Bye Bye Credit</Text>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  title: {
    fontWeight: '400',
    fontSize: fontValue(14),
    color: COLORS.black3,
    fontFamily: FONTS.inter.regular,
  },
  appName: {
    fontWeight: '600',
    fontSize: fontValue(14),
    color: COLORS.blue,
    fontFamily: FONTS.inter.regular,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});
