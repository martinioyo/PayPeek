// @ts-nocheck
import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, Alert, ActivityIndicator } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Importér billedvælgeren
import Tesseract from 'tesseract.js'; // Importér Tesseract.js

export default function SalaryScreen() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Tilstand til at gemme den valgte billed-URI
  const [extractedText, setExtractedText] = useState<string>(''); // Tilstand til at gemme udtrukket tekst
  const [loading, setLoading] = useState<boolean>(false); // Tilstand til at håndtere indlæsningsindikator

  // Funktion til at vælge et billede fra enhedens bibliotek
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri as string;
      setSelectedImage(imageUri); // Gem den valgte billed-URI
      console.log("Image selected:", imageUri); // Debugging log
      processImage(imageUri); // Behandl billedet for at udtrække tekst
    } else {
      Alert.alert('Intet billede valgt.');
    }
  };

  // Funktion til at udtrække tekst fra billedet ved hjælp af Tesseract.js
  const processImage = async (uri: string) => {
    setLoading(true); // Vis indlæsning under behandlingen
    setExtractedText(''); // Ryd tidligere tekst
    try {
      console.log("Processing image with Tesseract..."); // Debugging log

      // Konverter billed-URI til en fil, som Tesseract.js kan læse
      const result = await Tesseract.recognize(
        uri, 
        'eng', 
        {
          logger: (m) => console.log(m), // Tesseract logger
        }
      );

      console.log("Tesseract result:", result); // Debugging log
      const text = result.data.text; // Få den udtrukne tekst fra resultatet
      setExtractedText(text); // Gem udtrukket tekst
    } catch (error) {
      console.error("Error during text extraction:", error); // Fejl logning
      Alert.alert('Fejl ved behandling af billedet', 'Kunne ikke udtrække data.');
    }
    setLoading(false); // Skjul indlæsning efter behandling
  };

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText style={[styles.title, { marginTop: 40 }]}>Salary Insights</ThemedText>
        <ThemedText style={styles.subtitle}>Forstå din løn</ThemedText>
        <ThemedText style={styles.description}>
          Upload dine lønoplysninger og få øjeblikkelig indsigt i dine indtægter.
        </ThemedText>

        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.label}>Årlig løn</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Indtast din årlige løn"
            keyboardType="numeric"
          />
        </ThemedView>

        {/* Knap til at uploade lønbilledet */}
        <Button
          title="Upload løn"
          onPress={pickImageAsync} // Tilknyt billedvælgerfunktionen her
        />

        {/* Vis indlæsning mens billedet behandles */}
        {loading && <ActivityIndicator size="large" color="#0000ff" />}

        {/* Vis valgte billede, hvis tilgængeligt */}
        {selectedImage && (
          <ThemedView style={styles.imageContainer}>
            <Image source={{ uri: selectedImage }} style={styles.image} />
          </ThemedView>
        )}

        {/* Vis udtrukket tekst, hvis tilgængeligt */}
        {extractedText ? (
          <ThemedView style={styles.container}>
            <ThemedText style={styles.extractedText}>Udtrukne data:</ThemedText>
            <ThemedText>{extractedText}</ThemedText>
          </ThemedView>
        ) : (
          selectedImage && !loading && (
            <ThemedText style={styles.noText}>Ingen tekst fundet i billedet.</ThemedText>
          )
        )}

        {/* Pladsholder for lønindsigter */}
        <ThemedView style={styles.insightsContainer}>
          <ThemedText style={styles.insightsTitle}>Dine lønindsigter</ThemedText>

          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Årlig løn</ThemedText>
            <ThemedText style={styles.cardValue}>$0</ThemedText>
            <ThemedText style={styles.cardSubtext}>Per år</ThemedText>
          </ThemedView>

          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Månedlig indkomst</ThemedText>
            <ThemedText style={styles.cardValue}>$0</ThemedText>
            <ThemedText style={styles.cardSubtext}>Per måned</ThemedText>
          </ThemedView>

          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Estimeret skat</ThemedText>
            <ThemedText style={styles.cardValue}>$0</ThemedText>
            <ThemedText style={styles.cardSubtext}>Estimeret årlig skat</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    color: 'black',
    backgroundColor: 'white',
  },
  insightsContainer: {
    width: '100%',
    marginTop: 30,
  },
  insightsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardSubtext: {
    fontSize: 12,
    color: '#666',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});
