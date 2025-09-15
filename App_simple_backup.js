import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [meritCount, setMeritCount] = useState(0);
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleTap = () => {
    setMeritCount(count => count + 1);
    setShowPlusOne(true);
    setTimeout(() => setShowPlusOne(false), 800);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>电子木鱼</Text>
      
      <Text style={styles.counter}>功德: {meritCount}</Text>
      
      <TouchableOpacity style={styles.fishButton} onPress={handleTap}>
        <Text style={styles.fishEmoji}>🥥</Text>
        {showPlusOne && (
          <Text style={styles.plusOne}>功德+1</Text>
        )}
      </TouchableOpacity>
      
      <Text style={styles.hint}>点击木鱼积累功德</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 40,
  },
  counter: {
    fontSize: 24,
    color: '#D4AF37',
    fontWeight: '600',
    marginBottom: 40,
  },
  fishButton: {
    backgroundColor: '#8B4513',
    borderRadius: 100,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fishEmoji: {
    fontSize: 80,
  },
  plusOne: {
    position: 'absolute',
    top: -20,
    fontSize: 20,
    color: '#FF6B35',
    fontWeight: 'bold',
  },
  hint: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});