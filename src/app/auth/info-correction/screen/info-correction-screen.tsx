import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../navigation/auth/auth-stack";
import {FlatList, Pressable, Text} from "react-native";
import {Header} from "../../../../components/shared/header";
import {ByeByeInput} from "../../../../components/shared/bye-bye-input";
import {ByeByeButton} from "../../../../components/shared/bye-bye-button";
import DatePicker from "react-native-date-picker";
import CountryModal from "../../country/components/coutry-modal/country-modal";
import moment from "moment/moment";


interface inputType {
    id: string,
    label: string,
    key: string,
    onPress?: () => void
}

const InfoCorrectionScreen: FC<any> = () => {
    /// NAVIGATION
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    /// STATES
    const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const [modalVisible, setModalVisible] = useState(false);

    const [state, setState] = useState({
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        nationality: '',
        phoneNumber: '',

    });
    const inputs: inputType[] = [
        {
            id: '1',
            key: 'lastName',
            label: 'Nom',
        },
        {
            id: '2',
            key: 'firstName',
            label: 'Prénom',
        },
        {
            id: '3',
            key: 'dateOfBirth',
            label: 'Date de naissance',
            onPress: () => {
                setOpenDatePicker(true);
            },
        },
        {
            id: '4',
            key: 'nationality',
            label: 'Nationalité',
            onPress: () => {
                setModalVisible(true);
            },
        },
        {
            id: '5',
            key: 'phoneNumber',
            label: 'Mobile',
        },
    ];
    /// CALLBACK
    const handleChangeInput = (key: string, value: string) => {
        setState(prev => ({...prev, [key]: value}));
    };
    const handleClickLogin = () => {
        navigation.navigate('login');
    };
    const handleClickSave = () => {
        console.log(state)
        navigation.navigate('privacyPolicy');
    };

    const renderInput = ({item, index}: { item: inputType; index: number }) => (
        <Pressable style={styles.input}>
            <ByeByeInput
                // @ts-ignore
                value={state?.[item.key]}
                editable={inputs[index].onPress == null}
                onChangeText={(text) => handleChangeInput(inputs[index].key, text)}
                placeholder={inputs[index].label}
                // @ts-ignore
                showClear={state?.[item?.key] !== ''}
                onClear={() => setState(prev => ({...prev, [item?.key]: ''}))}
                onPress={inputs[index].onPress}
            />
        </Pressable>
    );

    /// VIEW
    return (
        <BaseView>
            <Header/>
            <Spacer height={3.188423645320197}/>
            <Text style={styles.title}>Recorriger vos données </Text>
            <Spacer height={4.433497536945813}/>
            <FlatList
                keyboardShouldPersistTaps={'always'}
                renderItem={renderInput}
                data={inputs}
                scrollEnabled={false}
                keyExtractor={(item, index) => item.key}
            />
            <ByeByeButton text={'Valider et enregistrer'} onClick={handleClickSave}/>
            <Pressable style={styles.loginContainer} onPress={handleClickLogin}>
                <Text style={styles.haveAccount}>Vous avez deja un compte?</Text>
                <Spacer width={0.5}/>
                <Text style={styles.login}>Se connecter</Text>
            </Pressable>
            <DatePicker
                modal
                open={openDatePicker}
                date={date}
                mode={'date'}
                onConfirm={d => {
                    setOpenDatePicker(false);
                    setState(prev => ({...prev, dateOfBirth: moment(d).format('DD MMMM YYYY').toString()}));
                }}
                onCancel={() => {
                    setOpenDatePicker(false);
                }}
            />
            <CountryModal
                isVisible={modalVisible}
                onClose={() => setModalVisible(false)}
                onCountrySelect={(country) => {
                    setState(prev => ({...prev, nationality: country.flag + ' ' + country.name.common}));
                }}
            />
        </BaseView>
    );
};

export default InfoCorrectionScreen;
