import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainLoginScreen from '../../app/auth/main-login/screen/main-login-screen';
import LoginScreen from '../../app/auth/login/screen/login-screen';
import {routeName} from '../../types/navigation';
import UsernameScreen from '../../app/auth/username/screen/username-screen';
import DateOfBirthScreen from '../../app/auth/date-of-birth/screen/date-of-birth-screen';
import GenderScreen from '../../app/auth/gender/screen/gender-screen';
import CountryScreen from '../../app/auth/country/screen/country-screen';
import CinScreen from '../../app/auth/cin/screen/cin-screen';
import EmailScreen from '../../app/auth/email/screen/email-screen';
import PhoneNumberScreen from '../../app/auth/phone-number/screen/phone-number-screen';
import PasswordScreen from '../../app/auth/password/screen/password-screen';
import VerificationCodeScreen from '../../app/auth/verification-code/screen/verification-code-screen';
import InfoVerificationScreen from '../../app/auth/info-verification/screen/info-verification-screen';
import InfoCorrectionScreen from '../../app/auth/info-correction/screen/info-correction-screen';
import ProfilePictureScreen from '../../app/auth/profile-picture/screen/profile-picture-screen';
import PrivacyPolicyScreen from '../../app/auth/privacy-policy/screen/privacy-policy-screen';

const Stack = createNativeStackNavigator();

const AuthStack: FC<{}> = () => {
  return (
    <Stack.Navigator
      initialRouteName="mainLogin"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="mainLogin" component={MainLoginScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="username" component={UsernameScreen} />
      <Stack.Screen name="dateOfBirth" component={DateOfBirthScreen} />
      <Stack.Screen name="gender" component={GenderScreen} />
      <Stack.Screen name="country" component={CountryScreen} />
      <Stack.Screen name="cin" component={CinScreen} />
      <Stack.Screen name="email" component={EmailScreen} />
      <Stack.Screen name="phoneNumber" component={PhoneNumberScreen} />
      <Stack.Screen name="password" component={PasswordScreen} />
      <Stack.Screen name="privacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen
        name="verificationCode"
        component={VerificationCodeScreen}
      />
      <Stack.Screen
        name="infoVerification"
        component={InfoVerificationScreen}
      />
      <Stack.Screen name="infoCorrection" component={InfoCorrectionScreen} />
      <Stack.Screen name="profilePicture" component={ProfilePictureScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

export type RootStackParamList = {
  [key in routeName]: object | undefined;
} & {
  mainLogin: {} | undefined;
  login: {} | undefined;
  username: {} | undefined;
  dateOfBirth: {} | undefined;
  gender: {} | undefined;
  country: {} | undefined;
  cin: {} | undefined;
  email: {} | undefined;
  phoneNumber: {} | undefined;
  password: {} | undefined;
  privacyPolicy: {} | undefined;
  verificationCode: {} | undefined;
  infoVerification: {} | undefined;
  infoCorrection: {} | undefined;
  profilePicture: {} | undefined;
};
