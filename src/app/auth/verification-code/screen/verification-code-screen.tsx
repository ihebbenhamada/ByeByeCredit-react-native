import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../navigation/auth/auth-stack";
import {KeyboardAvoidingView, Platform, Pressable, Text, View} from "react-native";
import {Header} from "../../../../components/shared/header";
import {ByeByeButton} from "../../../../components/shared/bye-bye-button";
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell,} from "react-native-confirmation-code-field";
import {numberRegex} from "../../../../utils/regx";
import {COLORS} from "../../../../config/constants/colors";
import SuccessModal from "../../../../components/shared/success-modal/success-modal";

const VerificationCodeScreen: FC<any> = () => {
    /// NAVIGATION
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    /// STATES
    const cellCount = 4;
    const [value, setValue] = useState<string>('');
    const ref = useBlurOnFulfill({value, cellCount: cellCount});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    /// CALLBACK

    const handleClickContinue = () => {
        handleOpenModal();
    };
    const handleClickResendCode = () => {

    }
    const handleClickChangePhoneNumber = () => {

    }
    const handleClickEmailConfirmation = () => {

    }
    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const handleSuccessNext = () => {
        setModalVisible(false);
        navigation.navigate('profilePicture');
    };

    /// VIEW
    return (
        <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
            <BaseView style={styles.container}>
                <Header/>
                <Spacer height={3.188423645320197}/>
                <Text style={styles.title}>Entez la code de confirmation </Text>
                <Spacer height={0.9852216748768473}/>
                <Text style={styles.setVerifCode}>Un code à 4 chiffres a été envoyé à +216 55 555 222</Text>
                <Spacer height={4.433497536945813}/>
                <View style={styles.input}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={value =>
                            numberRegex.test(value) ? setValue(value) : null
                        }
                        textContentType="oneTimeCode"
                        cellCount={cellCount}
                        rootStyle={styles.codeFiledRoot}
                        keyboardType={'number-pad'}
                        renderCell={({index, symbol, isFocused}) => (
                            <View
                                key={index}
                                style={[styles.cell, {borderColor: isFocused ? COLORS.blue : COLORS.gray}]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                <Text style={[styles.numberText]}>
                                    {symbol || (isFocused ? <Cursor/> : null)}
                                </Text>

                            </View>
                        )}
                    />
                </View>

            </BaseView>
            <Pressable style={styles.options}>
                <ByeByeButton text={'Continue'} onClick={handleClickContinue}/>
                <Spacer height={4.433497536945813}/>
                <Text style={styles.dontReceiveCode}>Si vou n’avez pas reçus le code</Text>
                <Pressable onPress={handleClickResendCode}>
                    <Text style={styles.option}>Renvoyer le code</Text>
                </Pressable>
                <Pressable onPress={handleClickChangePhoneNumber}>
                    <Text style={styles.option}>Changer le numéro mobile</Text>
                </Pressable>
                <Pressable onPress={handleClickEmailConfirmation}>
                    <Text style={styles.option}>Confirmer par email</Text>
                </Pressable>
            </Pressable>
            <SuccessModal
                isVisible={modalVisible}
                onClose={handleCloseModal}
                handleClickNext={handleSuccessNext}
            />
        </KeyboardAvoidingView>
    );
};

export default VerificationCodeScreen;
