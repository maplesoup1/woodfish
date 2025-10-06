import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const ANIMATION_DURATION = 800;
const TRANSLATE_DISTANCE = -50;

export default function MeritPlusOneAnimation() {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = Animated.parallel([
      Animated.timing(translateY, {
        toValue: TRANSLATE_DISTANCE,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]);

    animationRef.current.start();

    // 清理动画
    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [translateY, opacity]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          opacity,
        },
      ]}
    >
      <Text style={styles.text}>功德+1</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -30,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B35',
    textShadowColor: '#FFF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});