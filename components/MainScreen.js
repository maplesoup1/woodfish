import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import WoodenFishImage from './WoodenFishImage';
import MeritCounterText from './MeritCounterText';
import MeritPlusOneAnimation from './MeritPlusOneAnimation';

export default function MainScreen() {
  const [meritCount, setMeritCount] = useState(0);
  const [showPlusOne, setShowPlusOne] = useState(false);

  const handleTap = () => {
    setMeritCount(currentCount => currentCount + 1);
    
    setShowPlusOne(true);
    setTimeout(() => {
      setShowPlusOne(false);
    }, 800);
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