import { Audio } from 'expo-av';

class AudioManager {
  constructor() {
    this.sound = null;
    this.isLoaded = false;
  }

  async loadSound() {
    if (this.isLoaded) return;

    try {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: false,
      });

      const { sound } = await Audio.Sound.createAsync(
        require('../assets/woodfish.mp3'),
        { shouldPlay: false }
      );

      this.sound = sound;
      this.isLoaded = true;
    } catch (error) {
      console.error('Failed to load sound:', error);
    }
  }

  async playSound() {
    if (!this.isLoaded || !this.sound) {
      await this.loadSound();
    }

    try {
      await this.sound.replayAsync();
    } catch (error) {
      console.error('Failed to play sound:', error);
    }
  }

  async unloadSound() {
    if (this.sound) {
      try {
        await this.sound.unloadAsync();
        this.sound = null;
        this.isLoaded = false;
      } catch (error) {
        console.error('Failed to unload sound:', error);
      }
    }
  }
}

export default new AudioManager();
