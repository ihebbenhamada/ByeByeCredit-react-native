import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {Image, Pressable, Text,} from 'react-native';
import {Header} from '../../../../components/shared/header';
import {ByeByeInput} from '../../../../components/shared/bye-bye-input';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';
import {parsePasswordRequiredErrorType} from '../../../../utils/validators';
import {ICONS} from '../../../../config/constants/icons';
import {heightPercentageToDP} from '../../../../utils/dimensions';

const PasswordScreen: FC<any> = () => {
    /// NAVIGATION
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    /// STATES
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    /// CALLBACK
    const handleChangePassword = (text: string) => {
        setPassword(text.trim());
    };
    const handleClickNext = () => {
        navigation.navigate('infoVerification');
    };
    const handlePressShowPassword = () => {
        setShowPassword(prevState => !prevState);
    };
    const rightAccessory: Element = () => {
        return (
            <Image
                source={showPassword ? ICONS.eyeSlash : ICONS.eyeVisible}
                style={{
                    height: heightPercentageToDP(1.9704433497536946),
                    width: heightPercentageToDP(1.9704433497536946),
                }}
            />
        );
    };
    /// VIEW
    return (
        <BaseView>
            <Pressable style={{flex: 1}}>
                <Header/>
                <Spacer height={3.188423645320197}/>
                <Text style={styles.title}>Choisissez un mot de passe</Text>
                <Spacer height={0.9852216748768473}/>
                <Text style={styles.setPassword}>
                    créez un mot de passe d'au moins 6 caractères. Il devrait être quelque
                    chose que les autres ne pourraient pas deviner.
                </Text>
                <Spacer height={4.433497536945813}/>
                <Pressable style={styles.input}>
                    <ByeByeInput
                        value={password}
                        error={parsePasswordRequiredErrorType(password)}
                        onChangeText={handleChangePassword}
                        placeholder={'Mot de passe'}
                        secureTextEntry={!showPassword}
                        rightAccessory={rightAccessory}
                        onRightAccessoryPress={handlePressShowPassword}
                    />
                </Pressable>
            </Pressable>
            <ByeByeButton text={'Suivant'} onClick={handleClickNext}/>
            <Spacer height={3}/>
        </BaseView>
    );
};

export default PasswordScreen;
