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

const CinScreen: FC<any> = () => {
    /// NAVIGATION
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    /// STATES
    const [cin, setCin] = useState<string>('');
    /// CALLBACK
    const handleChangeCin = (text: string) => {
        setCin(text.trim());
    };
    const handleClickNext = () => {
        navigation.navigate('email');
    };
    const handleClickLogin = () => {
        navigation.navigate('login');
    };
    /// VIEW
    return (
        <BaseView>
            <Pressable style={{flex: 1}}>
                <Header/>
                <Spacer height={3.188423645320197}/>
                <Text style={styles.title}>Quelle est votre numero de CIN ?</Text>
                <Spacer height={0.9852216748768473}/>
                <Text style={styles.setCin}>
                    Verifier le numero déja affiché sur votre CIN qui comprend 8 chiffre
                </Text>
                <Spacer height={4.433497536945813}/>
                <Pressable style={styles.input}>
                    <ByeByeInput
                        value={cin}
                        onChangeText={handleChangeCin}
                        placeholder={'Numéro carte d\'identité nationale'}
                        showClear={cin !== ''}
                        onClear={() => setCin('')}
                    />
                </Pressable>
            </Pressable>
            <ByeByeButton text={'Suivant'} onClick={handleClickNext}/>
            <Pressable style={styles.loginContainer} onPress={handleClickLogin}>
                <Text style={styles.haveAccount}>Vous avez deja un compte?</Text>
                <Spacer width={0.5}/>
                <Text style={styles.login}>Se connecter</Text>
            </Pressable>
        </BaseView>

    );
};

export default CinScreen;
