import React, {FC, useState} from 'react';
import {styles} from './styles';
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../navigation/auth/auth-stack";
import {Text} from "react-native";
import {BaseView} from "../../../../components/shared/base-view";
import {Spacer} from "../../../../components";
import {Header} from "../../../../components/shared/header";
import {ByeByeButton} from "../../../../components/shared/bye-bye-button";
import Checkbox from "../../../../components/shared/checkbox/check-box";


const PrivacyPolicyScreen: FC<any> = () => {
    /// NAVIGATION
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    /// STATES
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const text: String = 'En tapant sur "J’accepte", vous acceptez nos \nconditions d\'utilisation et  notre politique de données';
    const words = text.split(' ');
    /// CALLBACK
    const handleClickAccept = () => {
        navigation.navigate('verificationCode');
    };
    const getWordStyle = (index: number) => {
        if ([7, 8, 10, 11, 12, 13, 14].includes(index)) {
            return styles.blueText;
        }
        return styles.normalText
    };
    /// VIEW
    return (
        <BaseView style={styles.container}>
            <Header/>
            <Spacer height={3.188423645320197}/>
            <Text style={styles.title}>Conditions générales d'utilisation et confidentialité</Text>
            <Spacer height={2.955665024630542}/>
            <Text style={styles.setPrivacyPolicy}>
                {'J\'accepte les conditions générales d\'utilisation et la politique de confidentialité de By By Credit. En utilisant cette application, je reconnais avoir lu et compris les termes et les règles qui régissent son utilisation. J\'autorise également la collecte, le traitement et le partage de mes données personnelles conformément à la politique de confidentialité de By By Credit.\n\nJ\'accepte les conditions générales d\'utilisation et la politique de confidentialité de By By Credit. En utilisant cette application, je reconnais avoir lu et compris les termes et les règles qui régissent son utilisation. J\'autorise également la collecte, le traitement et le partage de mes données personnelles conformément à la politique de confidentialité de By By Credit.'}
            </Text>


            <Checkbox label={<Text>
                {words.map((word, index) => (
                    <Text key={index} style={getWordStyle(index)}>
                        {word}{' '}
                    </Text>
                ))}
            </Text>}
                      checked={isChecked}
                      onChange={value => {
                          setIsChecked(value);
                      }}/>
            <ByeByeButton
                text={'J’accepte'}
                onClick={handleClickAccept}
                style={styles.btnAccept}
            />
            <Spacer height={5.911330049261084}/>

        </BaseView>
    );
};

export default PrivacyPolicyScreen;
