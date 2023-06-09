import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Loader} from '../components';
import AuthStack from './auth/auth-stack';

const MainNavigation: FC = () => {
  return (
    <NavigationContainer>
      <AuthStack />
      <Loader />
    </NavigationContainer>
  );
};

export default MainNavigation;
