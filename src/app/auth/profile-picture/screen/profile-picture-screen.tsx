import React, {FC, useState} from 'react';
import {BaseView} from '../../../../components/shared/base-view';
import {styles} from './styles';
import {Spacer} from '../../../../components';
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../navigation/auth/auth-stack";
import {Header} from "../../../../components/shared/header";
import {Image, ImageSourcePropType, Pressable, Text} from "react-native";
import {IMAGES} from "../../../../config/constants/images";
import {ByeByeButton} from "../../../../components/shared/bye-bye-button";
import {Footer} from "../../../../components/shared/footer";
import ImagePicker from 'react-native-image-crop-picker';

const ProfilePictureScreen: FC<any> = () => {
    /// NAVIGATION
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    /// STATES

    const [selectedImage, setSelectedImage] = useState<ImageSourcePropType | null>(null);
    /// CALLBACK

    const handleGalleryPicker = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
        }).then((image) => {
            setSelectedImage({uri: image.path});
        });
    }
    const handleCameraPicker = () => {
        ImagePicker.openCamera({
            mediaType: 'photo',
        }).then((image) => {
            setSelectedImage({uri: image.path});
        });
    }
    /// VIEW
    return (
        <BaseView>
            <Header/>
            <Spacer height={3.188423645320197}/>
            <Text style={styles.title}>Ajouter votre photo de profil</Text>
            <Spacer height={0.9852216748768473}/>
            <Text style={styles.setProfilePic}>ajouter un photo pour aidez vos amis a vous retrouvez</Text>
            <Spacer height={4.433497536945813}/>
            <Image source={selectedImage ? selectedImage : IMAGES.imagePlaceHolder} style={styles.imagePlaceholder}/>
            <Spacer height={10.291871921182265}/>
            <ByeByeButton text={'Choisir dans galerie'} onClick={handleGalleryPicker}/>
            <Spacer height={5.84975369458128}/>
            <ByeByeButton text={'Prendre une photo'} onClick={handleCameraPicker} isOutlined/>
            <Spacer height={5.84975369458128}/>
            <Pressable style={styles.divider}/>
            <Footer/>
        </BaseView>
    );
};

export default ProfilePictureScreen;
