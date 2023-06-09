import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {KeyboardAvoidingView, Platform, Pressable, Text} from 'react-native';
import {Header} from '../../../../components/shared/header';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';
import RadioGroup from '../../../../components/shared/gender-radio/gender-radio-group';

const GenderScreen: FC<any> = () => {
  /// NAVIGATION
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// STATES
  const [selectedValue, setSelectedValue] = useState('1');

  /// CALLBACK

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  const radioOptions = [
    {label: 'Femme', value: '1'},
    {label: 'Homme', value: '2'},
    {label: 'Personalisé', value: '3'},
  ];

  const handleClickNext = () => {
    navigation.navigate('country');
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
        <Text style={styles.title}>Quelle est votre genre ?</Text>
        <Spacer height={0.9852216748768473} />
        <Text style={styles.setGender}>Indiqué votre identité physique</Text>
        <Spacer height={4.433497536945813} />
        <RadioGroup
          options={radioOptions}
          selectedValue={selectedValue}
          onValueChange={handleValueChange}
        />
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

export default GenderScreen;
