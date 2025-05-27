import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@drink-smart/ui';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>DrinkSmart</Text>
        <Text style={styles.subtitle}>Track your daily hydration</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>0.0L</Text>
            <Text style={styles.statLabel}>Today</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>2.5L</Text>
            <Text style={styles.statLabel}>Goal</Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Add 250ml" 
            onPress={() => alert('Added 250ml!')} 
          />
          <Button 
            title="Add 500ml" 
            onPress={() => alert('Added 500ml!')}
            style={styles.button}
          />
          <Button 
            title="Custom Amount" 
            onPress={() => alert('Custom amount')}
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    marginTop: 12,
  },
}); 