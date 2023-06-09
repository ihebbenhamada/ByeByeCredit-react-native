import React, {FC, useState} from 'react';
import {KeyboardAvoidingView, Platform, Pressable, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {useNavigation} from '@react-navigation/native';
import {ByeByeInput} from '../../../../components/shared/bye-bye-input';
import {widthPercentageToDP} from '../../../../utils/dimensions';
import {Spacer} from '../../../../components';
import {styles} from './styles';
import {BaseView} from '../../../../components/shared/base-view';
import {Header} from '../../../../components/shared/header';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';

const UsernameScreen: FC<any> = () => {
  /// NAVIGATION
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// STATES
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  /// CALLBACK
  const handleChangeFirstName = (text: string) => {
    setFirstName(text.trim());
  };
  const handleChangeLastName = (text: string) => {
    setLastName(text.trim());
  };
  const handleClickNext = () => {
    navigation.navigate('dateOfBirth');
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
        <Text style={styles.title}>Comment vous appelez ?</Text>
        <Spacer height={0.9852216748768473} />
        <Text style={styles.setName}>
          Entrez le nom que vous verrier sur votre carte d’identité (cin)
        </Text>
        <Spacer height={0.3} />
        <Text style={styles.age}>l’utilisateur doit avoir age ≥ 18 ans</Text>
        <Spacer height={4.433497536945813} />
        <Pressable style={styles.inputContainer}>
          <Pressable style={styles.input}>
            <Text style={styles.label}>Nom</Text>
            <Spacer height={0.7} />
            <ByeByeInput
              width={widthPercentageToDP(40)}
              value={lastName}
              onChangeText={handleChangeLastName}
              placeholder={'Nom'}
              showClear={lastName !== ''}
              onClear={() => setLastName('')}
            />
          </Pressable>
          <Pressable style={styles.input}>
            <Text style={styles.label}>Prénom</Text>
            <Spacer height={0.7} />
            <ByeByeInput
              width={widthPercentageToDP(40)}
              value={firstName}
              onChangeText={handleChangeFirstName}
              placeholder={'Prénom'}
              showClear={firstName !== ''}
              onClear={() => setFirstName('')}
            />
          </Pressable>
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

export default UsernameScreen;
