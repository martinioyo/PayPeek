import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from 'react-native';
import { Button } from 'react-native';

export default function SalaryScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Salary Insights</ThemedText>
        <ThemedText style={styles.subtitle}>
          Understand Your Salary
        </ThemedText>
        <ThemedText style={styles.description}>
          Upload your salary information and get instant insights about your earnings.
        </ThemedText>
        
        <ThemedView style={styles.inputContainer}>
          <ThemedText style={styles.label}>Annual Salary</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter your annual salary"
            keyboardType="numeric"
          />
        </ThemedView>
        
        <Button
          title="Upload Salary"
          onPress={() => {}}
        />

        {/* Placeholder for salary insights */}
        <ThemedView style={styles.insightsContainer}>
          <ThemedText style={styles.insightsTitle}>Your Salary Insights</ThemedText>
          
          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Annual Salary</ThemedText>
            <ThemedText style={styles.cardValue}>$0</ThemedText>
            <ThemedText style={styles.cardSubtext}>Per year</ThemedText>
          </ThemedView>

          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Monthly Income</ThemedText>
            <ThemedText style={styles.cardValue}>$0</ThemedText>
            <ThemedText style={styles.cardSubtext}>Per month</ThemedText>
          </ThemedView>

          <ThemedView style={styles.card}>
            <ThemedText style={styles.cardTitle}>Estimated Tax</ThemedText>
            <ThemedText style={styles.cardValue}>$0</ThemedText>
            <ThemedText style={styles.cardSubtext}>Estimated annual tax</ThemedText>
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
});