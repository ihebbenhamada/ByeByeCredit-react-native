import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {fontValue, heightPercentageToDP} from '../../../utils/dimensions';
import {ICONS} from '../../../config/constants/icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation/auth/auth-stack';

const Header: React.FC<{onClickBack?: () => void}> = ({onClickBack}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onClickBack ? onClickBack : () => navigation.goBack()}
        hitSlop={10}>
        <Image source={ICONS.arrowBack} style={styles.arrow} />
      </Pressable>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(6.896551724137931),
    justifyContent: 'center',
  },
  arrow: {width: fontValue(20), height: fontValue(20)},
});
