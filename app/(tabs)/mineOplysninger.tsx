import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Button,
    Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MineOplysningerScreen() {
    const [profileImage, setProfileImage] = useState(
        'https://via.placeholder.com/150',
    );

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        } else {
            Alert.alert('Intet billede valgt.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mine Oplysninger</Text>

                <Image
                    style={styles.profileImage}
                    source={{ uri: profileImage }}
                />

                <Button title="Upload profilbillede" onPress={pickImageAsync} />
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Navn</Text>
                <Text style={styles.infoText}>John Doe</Text>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Email</Text>
                <Text style={styles.infoText}>johndoe@example.com</Text>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Telefonnummer</Text>
                <Text style={styles.infoText}>+45 12345678</Text>
            </View>

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Adresse</Text>
                <Text style={styles.infoText}>
                    Eksempelvej 123, 1234 København
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        gap: 8,
        
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        gap: 8,
        marginTop: 30,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 10,
    },
    infoCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 2,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
        marginBottom: 5,
    },
    infoText: {
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
    },
});
