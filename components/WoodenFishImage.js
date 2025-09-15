import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function WoodenFishImage({ onTap }) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onTap}
      activeOpacity={0.8}
    >
      <Text style={styles.fishEmoji}>🥥</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B4513',
    borderRadius: width * 0.3,
    width: width * 0.6,
    height: width * 0.6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fishEmoji: {
    fontSize: width * 0.25,
    textAlign: 'center',
  },
});