import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {heightPercentageToDP} from '../../../utils/dimensions';
import {COLORS} from '../../../config/constants/colors';
import {ICONS} from '../../../config/constants/icons';
import {Spacer} from '../index';
import {AccessToken, LoginManager} from "react-native-fbsdk-next";
import {GoogleSignin, statusCodes} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
    iosClientId: '341989276355-ci9dgckm8bh92o62hq997os54ggh9483.apps.googleusercontent.com',
});

const SocialLogin: React.FC<{}> = ({}) => {
    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            // Use the user info as needed
        } catch (error) {
            // @ts-ignore
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the sign-in flow');
            } else { // @ts-ignore
                if (error.code === statusCodes.IN_PROGRESS) {
                    console.log('Sign-in is already in progress');
                } else { // @ts-ignore
                    if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                        console.log('Play services not available or outdated');
                    } else {
                        // @ts-ignore
                        console.log('Something went wrong:', error.message);
                    }
                }
            }
        }
    };
    const handleFacebookSignIn = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                console.log('Facebook Sign-In cancelled');
            } else {
                const accessTokenData = await AccessToken.getCurrentAccessToken();
                if (accessTokenData) {
                    // Use the access token to get user info or make API calls
                    console.log(accessTokenData.accessToken.toString());
                }
            }
        } catch (error) {
            console.log('Facebook Sign-In error:', error);
        }
    };
    const handleAppleLogin = async () => {
        /*try {
            const appleAuthRequestResponse = await appleAuth.performRequest({
                requestedOperation: appleAuth.Operation.LOGIN,
                requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });

            // Handle the response
            console.log(appleAuthRequestResponse);
        } catch (error) {
            // Handle error
            console.log(error);
        }*/
    };
    return (
        <View style={styles.socialContainer}>
            <Pressable
                style={[
                    styles.socialItem,
                    {
                        backgroundColor: COLORS.pink,
                    },
                ]} onPress={handleGoogleSignIn}>
                <Image source={ICONS.google} style={styles.socialLogo}/>
            </Pressable>
            <Spacer width={3.2}/>
            <Pressable
                style={[
                    styles.socialItem,
                    {
                        backgroundColor: COLORS.black,
                    },
                ]} onPress={handleAppleLogin}>
                <Image source={ICONS.apple} style={styles.socialLogo}/>
            </Pressable>
            <Spacer width={3.2}/>
            <Pressable
                style={[
                    styles.socialItem,
                    {
                        backgroundColor: COLORS.blue,
                    },
                ]} onPress={handleFacebookSignIn}>
                <Image source={ICONS.facebook} style={styles.socialLogo}/>
            </Pressable>
        </View>
    );
};

export default SocialLogin;
const styles = StyleSheet.create({
    socialItem: {
        height: heightPercentageToDP(4.926108374384237),
        width: heightPercentageToDP(4.926108374384237),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialLogo: {
        height: heightPercentageToDP(1.477832512315271),
        width: heightPercentageToDP(1.477832512315271),
    },
    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
