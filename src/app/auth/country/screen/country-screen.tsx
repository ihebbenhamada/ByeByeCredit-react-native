import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../navigation/auth/auth-stack';
import {Image, Pressable, Text,} from 'react-native';
import {Header} from '../../../../components/shared/header';
import {ByeByeButton} from '../../../../components/shared/bye-bye-button';
import CountryModal from '../components/coutry-modal/country-modal';
import {ICONS} from '../../../../config/constants/icons';
import {Country} from '../components/coutry-modal/interfaces';

const CountryScreen: FC<any> = () => {
    /// NAVIGATION
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    /// STATES
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    /// CALLBACK

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
    };
    const handleClickNext = () => {
        navigation.navigate('cin');
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
                <Text style={styles.title}>Quelle est votre nationalité origine?</Text>
                <Spacer height={0.9852216748768473}/>
                <Text style={styles.setCountry}>
                    Indiqué la payé deja indiqué sur CIN
                </Text>
                <Spacer height={4.433497536945813}/>
                <Pressable style={styles.searchContainer} onPress={handleOpenModal}>
                    <Image source={ICONS.search} style={styles.searchIcon}/>
                    <Spacer width={4.266666666666667} height={0}/>
                    <Text
                        style={selectedCountry ? styles.countryFlag : styles.searchHint}>
                        {selectedCountry ? selectedCountry?.flag : ''}
                    </Text>
                    <Text
                        style={selectedCountry ? styles.countryName : styles.searchHint}>
                        {selectedCountry ? selectedCountry?.name?.common : 'Recherche'}
                    </Text>
                </Pressable>
            </Pressable>
            <ByeByeButton text={'Suivant'} onClick={handleClickNext}/>
            <Pressable style={styles.loginContainer} onPress={handleClickLogin}>
                <Text style={styles.haveAccount}>Vous avez deja un compte?</Text>
                <Spacer width={0.5}/>
                <Text style={styles.login}>Se connecter</Text>
            </Pressable>
            <CountryModal
                isVisible={modalVisible}
                onClose={handleCloseModal}
                onCountrySelect={handleCountrySelect}
            />
        </BaseView>
    );
};

export default CountryScreen;
