import React, {FC} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {Pressable, Text} from 'react-native';
import {Header} from '../../../../components/shared/header';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';

// @ts-ignore
const InfoVerificationScreen: FC<any> = () => {
  /// NAVIGATION
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// STATES
  /// CALLBACK
  const handleClickSave = () => {
    navigation.navigate('phoneNumber');
  };
  const handleClickLogin = () => {
    navigation.navigate('login');
  };
  /// VIEW
  return (
    <BaseView style={styles.container}>
      <Header />
      <Spacer height={3.188423645320197} />
      <Text style={styles.title}>Vérifier vos données </Text>
      <Spacer height={0.9852216748768473} />
      <Text style={styles.setVerifInfo}>
        Nous enregistrons les informations de connexion pour Houda Triki afin
        que vous n'ayez pas à les saisir lors de votre prochaine connexion.
      </Text>
      <Spacer height={4.433497536945813} />
      <Pressable style={{flexDirection: 'row', flex: 1}}>
        <Pressable style={{width: '35%'}}>
          <Text style={styles.labels}>Nom</Text>
          <Spacer height={2.3399014778325125} />
          <Text style={styles.labels}>Prénom</Text>
          <Spacer height={2.3399014778325125} />
          <Text style={styles.labels}>Age</Text>
          <Spacer height={2.3399014778325125} />
          <Text style={styles.labels}>Nationalité</Text>
          <Spacer height={2.3399014778325125} />
          <Text style={styles.labels}>Mobile</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.info}>Triki</Text>
          <Spacer height={2.3399014778325125} />
          <Text style={styles.info}>Houda</Text>
          <Spacer height={2.3399014778325125} />
          <Text style={styles.info}>27 ans</Text>
          <Spacer height={2.3399014778325125} />
          <Pressable style={{flexDirection: 'row'}}>
            <Text style={styles.flag}>🇹🇳</Text>
            <Text style={styles.info}>Tunisie</Text>
          </Pressable>

          <Spacer height={2.3399014778325125} />
          <Text style={styles.info}>+216 50 254 225</Text>
        </Pressable>
      </Pressable>

      <ByeByeButton
        text={'Enregistrer vos données'}
        onClick={handleClickSave}
      />
      <Spacer height={2.955665024630542} />
      <ByeByeButton
        text={'Corriger les informations'}
        onClick={handleClickSave}
        isOutlined
      />
      <Spacer height={5.911330049261084} />
      <Pressable style={styles.loginContainer} onPress={handleClickLogin}>
        <Text style={styles.haveAccount}>Vous avez deja un compte?</Text>
        <Spacer width={0.5} />
        <Text style={styles.login}>Se connecter</Text>
      </Pressable>
    </BaseView>
  );
};

export default InfoVerificationScreen;
