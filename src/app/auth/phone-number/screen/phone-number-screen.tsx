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

const PhoneNumberScreen: FC<any> = () => {
  /// NAVIGATION
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// STATES
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  /// CALLBACK
  const handleChangePhoneNumber = (text: string) => {
    setPhoneNumber(text.trim());
  };
  const handleClickNext = () => {
    navigation.navigate('password');
  };
  const handleClickSignUpEmail = () => {
    navigation.navigate('email');
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
        <Text style={styles.title}>Quelle est votre numéro mobile?</Text>
        <Spacer height={0.9852216748768473} />
        <Text style={styles.setPhoneNumber}>
          Entez le numéro mobile ou vous joinder personne ne verra sur votre
          profil
        </Text>
        <Spacer height={4.433497536945813} />
        <Pressable style={styles.input}>
          <Text style={styles.label}>Numéro de mobile</Text>
          <Spacer height={0.7} />
          <ByeByeInput
            value={phoneNumber}
            onChangeText={handleChangePhoneNumber}
            placeholder={'Numéro de mobile'}
            showClear={phoneNumber !== ''}
            onClear={() => setPhoneNumber('')}
          />
        </Pressable>
        <Spacer height={4.433497536945813} />
        <ByeByeButton text={'Suivant'} onClick={handleClickNext} />
      </BaseView>
      <Pressable style={styles.loginContainer} onPress={handleClickSignUpEmail}>
        <Text style={styles.login}>S’incecire avec address email</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default PhoneNumberScreen;
