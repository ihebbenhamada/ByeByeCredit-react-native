import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {Image, Pressable, Text} from 'react-native';
import {IMAGES} from '../../../../config/constants/images';
import ByeByeInput from '../../../../components/shared/bye-bye-input/bye-bye-input';
import {
  parseEmailErrorType,
  parsePasswordRequiredErrorType,
} from '../../../../utils/validators';
import {ICONS} from '../../../../config/constants/icons';
import {heightPercentageToDP} from '../../../../utils/dimensions';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';
import SocialLogin from '../../../../components/shared/social-login/social-login';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {useNavigation} from '@react-navigation/native';

const LoginScreen: FC<any> = () => {
  /// NAVIGATION
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// STATES
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  /// CALLBACK
  const handlePressShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };
  const handleChangePassword = (text: string) => {
    setPassword(text);
  };
  const handleChangeEmail = (text: string) => {
    setEmail(text.trim());
  };
  const handleClickLogin = () => {};
  const handleClickCreateAccount = () => {
    navigation.navigate('username');
  };
  const rightAccessory: Element = () => {
    return (
      <Image
        source={ICONS.eyeSlash}
        style={{
          height: heightPercentageToDP(1.9704433497536946),
          width: heightPercentageToDP(1.9704433497536946),
        }}
      />
    );
  };
  /// VIEW
  return (
    <BaseView style={styles.container}>
      <Spacer height={8.02463054187192} />
      <Image source={IMAGES.logo} style={styles.logo} />
      <Spacer height={4.943349753694582} />
      <Text style={styles.welcome}>Bienvenue</Text>
      <Spacer height={2.955665024630542} />
      <ByeByeInput
        value={email}
        error={parseEmailErrorType(email)}
        onChangeText={handleChangeEmail}
        placeholder={'Adresse e-mail'}
        showClear={email !== ''}
        onClear={() => setEmail('')}
      />
      <Spacer height={1} />
      <ByeByeInput
        value={password}
        error={parsePasswordRequiredErrorType(password)}
        onChangeText={handleChangePassword}
        placeholder={'Mot de passe'}
        secureTextEntry={!showPassword}
        rightAccessory={rightAccessory}
        onRightAccessoryPress={handlePressShowPassword}
      />
      <Spacer height={1} />
      <Text style={styles.forgetPasswoed}>Mot de passe oublié ?</Text>
      <Spacer height={2.955665024630542} />
      <ByeByeButton text={'Se Connecter'} onClick={handleClickLogin} />
      <Spacer height={1.9704433497536946} />
      <Pressable
        style={styles.createAccountContainer}
        onPress={handleClickCreateAccount}>
        <Text style={styles.firstTime}>la premier fois?</Text>
        <Spacer width={0.5} />
        <Text style={styles.createAccount}>Créer un compte</Text>
      </Pressable>
      <Spacer height={2.9556650246305426} />
      <Pressable style={styles.divider} />
      <Spacer height={2.955665024630542} />
      <Text style={styles.or}>Ou bien connecter avec</Text>
      <Spacer height={1.9704433497536946} />
      <SocialLogin />
    </BaseView>
  );
};

export default LoginScreen;
