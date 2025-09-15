import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function WoodenFishImage({ onTap }) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onTap}
      activeOpacity={0.8}
    >
      <Image 
        source={require('../assets/wooden_fish.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
  },
});