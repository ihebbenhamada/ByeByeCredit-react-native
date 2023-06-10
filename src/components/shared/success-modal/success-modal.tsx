import React from 'react';
import {Dimensions, Image, Pressable, Text, View,} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './styles';
import {COLORS} from "../../../config/constants/colors";
import {ICONS} from "../../../config/constants/icons";
import {Spacer} from "../spacer";
import {ByeByeButton} from "../bye-bye-button";

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    handleClickNext: () => void;
}

const SuccessModal: React.FC<ModalProps> = ({
                                                isVisible,
                                                onClose,
                                                handleClickNext,
                                            }) => {

    return (
        <Modal
            isVisible={isVisible}
            backdropOpacity={0.8}
            onBackdropPress={onClose}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            animationInTiming={500}
            animationOutTiming={500}
            avoidKeyboard
            backdropColor={COLORS.black}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={500}
            coverScreen
            useNativeDriverForBackdrop
            deviceHeight={Dimensions.get('screen').height}
            deviceWidth={Dimensions.get('screen').width}
            hasBackdrop
            statusBarTranslucent
            hideModalContentWhileAnimating
            useNativeDriver>
            <View style={styles.modalContainer}>
                <View style={styles.container}>
                    <Pressable style={styles.image}>
                        <Image source={ICONS.success} style={styles.success}/>
                    </Pressable>
                    <Spacer height={3.4482758620689653}/>
                    <Text style={styles.congratsText}>Félicitation</Text>
                    <Spacer height={0.9852216748768473}/>
                    <Text style={styles.congratsDescription}>Vous Avez activé le compte avec succés</Text>
                    <ByeByeButton text={'Suivant'} onClick={handleClickNext} style={styles.btnStyle}/>
                </View>
            </View>
        </Modal>
    );
};
export default SuccessModal;
