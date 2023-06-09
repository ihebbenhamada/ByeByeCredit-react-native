import React, {FC, useState} from 'react';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {BaseView} from '../../../../components/shared/base-view';
import {Pressable, Text} from 'react-native';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';
import {Header} from '../../../../components/shared/header';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');
// @ts-ignore
const DateOfBirthScreen: FC<any> = () => {
  /// NAVIGATION

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  /// STATES
  const [date, setDate] = useState<Date>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  /// CALLBACK
  const handleClickNext = () => {
    navigation.navigate('gender');
  };
  const showDatePicker = () => {
    setOpen(true);
  };
  /// VIEW
  return (
    <BaseView style={styles.container}>
      <Header />
      <Spacer height={3.188423645320197} />
      <Text style={styles.title}>Quelle est votre date de naissance?</Text>
      <Spacer height={0.9852216748768473} />
      <Text style={styles.setCin}>
        L’age doit avoir superieur ou égale à 8 ans. Indiqué l’age afficher sur
        votre CIN
      </Text>
      <Spacer height={4.433497536945813} />
      <Pressable style={styles.inputContainer}>
        <Pressable style={styles.input}>
          <Text style={styles.label}>Date de naissance</Text>
          <Spacer height={0.7} />
          <Pressable style={styles.dateInput} onPress={showDatePicker}>
            <Text style={styles.dateText}>
              {moment(date).format('DD MMMM YYYY').toString()}
            </Text>
          </Pressable>
        </Pressable>
      </Pressable>
      <Spacer height={4.433497536945813} />
      <ByeByeButton text={'Suivant'} onClick={handleClickNext} />
      <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        onConfirm={d => {
          setOpen(false);
          setDate(d);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </BaseView>
  );
};

export default DateOfBirthScreen;
