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

const EmailScreen: FC<any> = () => {
  /// NAVIGATION
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// STATES
  const [email, setEmail] = useState<string>('');
  /// CALLBACK
  const handleChangeEmail = (text: string) => {
    setEmail(text.trim());
  };
  const handleClickNext = () => {
    navigation.navigate('phoneNumber');
  };
  const handleClickSinUpPhone = () => {
    navigation.navigate('phoneNumber');
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
        <Text style={styles.title}>Quelle est votre adresse email ?</Text>
        <Spacer height={0.9852216748768473} />
        <Text style={styles.setEmail}>
          Entez une adresse email validé de vous
        </Text>
        <Spacer height={4.433497536945813} />
        <Pressable style={styles.input}>
          <Text style={styles.label}>Adresse email</Text>
          <Spacer height={0.7} />
          <ByeByeInput
            value={email}
            onChangeText={handleChangeEmail}
            placeholder={'Adresse email'}
            showClear={email !== ''}
            onClear={() => setEmail('')}
          />
        </Pressable>
        <Spacer height={4.433497536945813} />
        <ByeByeButton text={'Suivant'} onClick={handleClickNext} />
      </BaseView>
      <Pressable style={styles.loginContainer} onPress={handleClickSinUpPhone}>
        <Text style={styles.login}>S’incecire avecun numéro mobile</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default EmailScreen;
