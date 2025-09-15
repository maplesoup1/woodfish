import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MeritCounterText({ count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>功德</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
  },
  label: {
    fontSize: 24,
    color: '#8B4513',
    fontWeight: '600',
    marginBottom: 10,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#D4AF37',
    textShadowColor: '#8B4513',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});