import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitter = <Icon name={'twitter'} size={30} color={'black'} />;
const facebook = <Icon name={'facebook'} size={30} color={'black'} />;
const instagram = <Icon name={'instagram'} size={30} color={'black'} />;
const linkedin = <Icon name={'linkedin'} size={30} color={'black'} />;
const tiktok = <Icon name={'sitemap'} size={30} color={'black'} />;
const kwai = <Icon name={'link'} size={30} color={'black'} />; 

const ProfileCard = () => {
    const user = {
        avatar: "https://i.postimg.cc/1tQ0Psct/videomio.gif",
        coverPhoto: "https://www.w3schools.com/w3images/lights.jpg",
        name: "Juan Diego Poma Cepeda"
    };
    return (
        <View style={styles.container}>
            <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
            <View style={styles.avatarContainer}>
                <Image source={{ uri: user.avatar }} style={styles.avatar} />
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://facebook.com/')}>
                    {facebook}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://twitter.com/')}>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://instagram.com/')}>
                    {instagram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://linkedin.com/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://tiktok.com/')}>
                    {tiktok}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => Linking.openURL('https://kwai.com/')}>
                    {kwai}
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center'
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard;
