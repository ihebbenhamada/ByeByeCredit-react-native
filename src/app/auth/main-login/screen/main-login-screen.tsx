import React, {FC} from 'react';
import {Image, Pressable, Text} from 'react-native';
import {Spacer} from '../../../../components';
import {IMAGES} from '../../../../config/constants/images';
import {BaseView} from '../../../../components/shared/base-view';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';
import SocialLogin from '../../../../components/shared/social-login/social-login';
import {Footer} from '../../../../components/shared/footer';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';

const MainLoginScreen: FC<any> = () => {
  /// NAVIGATION
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// CALLBACK
  const handleClickLogin = () => {
    navigation.navigate('login');
  };
  const handleClickCreateAccount = () => {
    navigation.navigate('username');
  };
  /// VIEW
  return (
    <BaseView style={styles.container}>
      <Spacer height={7.75} />
      <Image source={IMAGES.logo} style={styles.logo} />
      <Spacer height={3.4482758620689653} />
      <Pressable style={styles.profilePicContainer}>
        <Image source={IMAGES.profilePic} style={styles.profilePic} />
        <Pressable style={styles.notificationContainer}>
          <Text style={styles.notificationText}>7</Text>
        </Pressable>
      </Pressable>
      <Spacer height={3.4482758620689653} />
      <Text style={styles.username}>DaDa Triki</Text>
      <Spacer height={5.172413793103448} />
      <ByeByeButton text={'Se Connecter'} onClick={handleClickLogin} />
      <Spacer height={1.9704433497536946} />
      <Text style={styles.or}>Ou</Text>
      <Spacer height={1.9704433497536946} />
      <Pressable onPress={handleClickCreateAccount}>
        <Text style={styles.createAccount}>Créer un compte</Text>
      </Pressable>
      <Spacer height={2.955665024630542} />
      <Pressable style={styles.divider} />
      <Spacer height={2.955665024630542} />
      <Text style={styles.or}>Ou bien connecter avec</Text>
      <Spacer height={1.9704433497536946} />
      <SocialLogin />
      <Footer />
    </BaseView>
  );
};

export default MainLoginScreen;
