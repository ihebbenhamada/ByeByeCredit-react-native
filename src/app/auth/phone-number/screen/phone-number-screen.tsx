import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {Pressable, Text} from 'react-native';
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
        <BaseView>
            <Pressable style={{flex: 1}}>
                <Header/>
                <Spacer height={3.188423645320197}/>
                <Text style={styles.title}>Quelle est votre numéro mobile?</Text>
                <Spacer height={0.9852216748768473}/>
                <Text style={styles.setPhoneNumber}>
                    Entez le numéro mobile ou vous joinder personne ne verra sur votre
                    profil
                </Text>
                <Spacer height={4.433497536945813}/>
                <Pressable style={styles.input}>
                    <ByeByeInput
                        value={phoneNumber}
                        onChangeText={handleChangePhoneNumber}
                        placeholder={'Numéro de mobile'}
                        showClear={phoneNumber !== ''}
                        onClear={() => setPhoneNumber('')}
                    />
                </Pressable>
            </Pressable>
            <ByeByeButton text={'Suivant'} onClick={handleClickNext}/>
            <Spacer height={1.5}/>
            <Pressable style={styles.loginContainer} onPress={handleClickSignUpEmail}>
                <Text style={styles.login}>S’incecire avec address email</Text>
            </Pressable>
        </BaseView>
    );
};

export default PhoneNumberScreen;
