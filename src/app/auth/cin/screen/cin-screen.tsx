import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {KeyboardAvoidingView, Platform, Pressable, Text} from 'react-native';
import {Header} from '../../../../components/shared/header';
import {ByeByeInput} from '../../../../components/shared/bye-bye-input';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';

const CinScreen: FC<any> = () => {
  /// NAVIGATION
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// STATES
  const [cin, setCin] = useState<string>('');
  /// CALLBACK
  const handleChangeCin = (text: string) => {
    setCin(text.trim());
  };
  const handleClickNext = () => {
    navigation.navigate('email');
  };
  const handleClickLogin = () => {
    navigation.navigate('login');
  };
  /// VIEW
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
      <BaseView style={styles.container}>
        <Header />
        <Spacer height={3.188423645320197} />
        <Text style={styles.title}>Quelle est votre numero de CIN ?</Text>
        <Spacer height={0.9852216748768473} />
        <Text style={styles.setCin}>
          Verifier le numero déja affiché sur votre CIN qui comprend 8 chiffre
        </Text>
        <Spacer height={4.433497536945813} />
        <Pressable style={styles.input}>
          <Text style={styles.label}>Numero carte d’identité nationale </Text>
          <Spacer height={0.7} />
          <ByeByeInput
            value={cin}
            onChangeText={handleChangeCin}
            placeholder={'CIN'}
            showClear={cin !== ''}
            onClear={() => setCin('')}
          />
        </Pressable>
        <Spacer height={4.433497536945813} />
        <ByeByeButton text={'Suivant'} onClick={handleClickNext} />
      </BaseView>
      <Pressable style={styles.loginContainer} onPress={handleClickLogin}>
        <Text style={styles.haveAccount}>Vous avez deja un compte?</Text>
        <Spacer width={0.5} />
        <Text style={styles.login}>Se connecter</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default CinScreen;
