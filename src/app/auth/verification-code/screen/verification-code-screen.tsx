import React, {FC} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';

// @ts-ignore
const VerificationCodeScreen: FC<any> = () => {
  return (
    <BaseView style={styles.container}>
      <Spacer />
    </BaseView>
  );
};

export default VerificationCodeScreen;