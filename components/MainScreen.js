import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import WoodenFishImage from './WoodenFishImage';
import MeritCounterText from './MeritCounterText';
import MeritPlusOneAnimation from './MeritPlusOneAnimation';
import audioManager from '../utils/audioManager';

const ANIMATION_DURATION = 800;
const MERIT_STORAGE_KEY = '@woodfish_merit_count';

export default function MainScreen() {
  const [meritCount, setMeritCount] = useState(0);
  const [showPlusOne, setShowPlusOne] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // 预加载音频
    audioManager.loadSound();

    // 加载保存的功德数
    loadMeritCount();

    // 清理定时器和音频资源
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      audioManager.unloadSound();
    };
  }, []);

  // 保存功德数到本地存储
  useEffect(() => {
    saveMeritCount(meritCount);
  }, [meritCount]);

  const loadMeritCount = async () => {
    try {
      const savedCount = await AsyncStorage.getItem(MERIT_STORAGE_KEY);
      if (savedCount !== null) {
        setMeritCount(parseInt(savedCount, 10));
      }
    } catch (error) {
      console.error('Failed to load merit count:', error);
    }
  };

  const saveMeritCount = async (count) => {
    try {
      await AsyncStorage.setItem(MERIT_STORAGE_KEY, count.toString());
    } catch (error) {
      console.error('Failed to save merit count:', error);
    }
  };

  const handleTap = () => {
    setMeritCount(currentCount => currentCount + 1);

    // 播放音效
    audioManager.playSound();

    // 触觉反馈
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    // 清理之前的定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setShowPlusOne(true);
    timeoutRef.current = setTimeout(() => {
      setShowPlusOne(false);
      timeoutRef.current = null;
    }, ANIMATION_DURATION);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <MeritCounterText count={meritCount} />
        
        <View style={styles.woodenFishContainer}>
          <WoodenFishImage onTap={handleTap} />
          {showPlusOne && <MeritPlusOneAnimation />}
        </View>
        
        <View style={styles.spacer} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  woodenFishContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    flex: 0.5,
  },
});