import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Audio } from 'expo-av';
import WoodenFishImage from './WoodenFishImage';
import MeritCounterText from './MeritCounterText';
import MeritPlusOneAnimation from './MeritPlusOneAnimation';

export default function MainScreen() {
  const [meritCount, setMeritCount] = useState(0);
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [sound, setSound] = useState();

  const loadSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/tap_sound.mp3')
      );
      setSound(sound);
    } catch (error) {
      console.log('音频加载失败:', error);
    }
  };

  React.useEffect(() => {
    loadSound();

    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleTap = async () => {
    setMeritCount(currentCount => currentCount + 1);
    
    setShowPlusOne(true);
    setTimeout(() => {
      setShowPlusOne(false);
    }, 800);

    if (sound) {
      try {
        await sound.replayAsync();
      } catch (error) {
        console.log('音频播放失败:', error);
      }
    }
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