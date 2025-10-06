import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');
const FISH_SIZE = width * 0.6;
const EMOJI_SIZE = width * 0.25;

export default function WoodenFishImage({ onTap }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
      speed: 50,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 3,
      tension: 100,
    }).start();
  };

  return (
    <TouchableOpacity
      onPress={onTap}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
    >
      <Animated.View
        style={[
          styles.container,
          { transform: [{ scale: scaleAnim }] }
        ]}
      >
        <Text style={styles.fishEmoji}>🥥</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B4513',
    borderRadius: FISH_SIZE / 2,
    width: FISH_SIZE,
    height: FISH_SIZE,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fishEmoji: {
    fontSize: EMOJI_SIZE,
    textAlign: 'center',
  },
});