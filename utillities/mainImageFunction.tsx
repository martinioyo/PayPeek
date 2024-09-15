import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput, Button } from 'react-native';
import * as ImagePicker2 from 'expo-image-picker'; 


export default function ImagePicker() {
const [selectedImage, setSelectedImage] = useState<string | null>(null); // Tilstand til at gemme den valgte billed-URI

// Funktion til at vælge et billede fra enhedens bibliotek
// const pickImageAsync = async () => {
//   let result = await ImagePicker.launchImageLibraryAsync({
//     allowsEditing: true,
//     quality: 1,
//   });

//   if (!result.canceled) {
//     setSelectedImage(result.assets[0].uri as string); // Gem den valgte billed-URI
//   } else {
//     Alert.alert('Intet billede valgt.');
//   }
// };
}