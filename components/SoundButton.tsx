import Ionicons from '@expo/vector-icons/Ionicons'
import { AVPlaybackSource } from 'expo-av'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import useSound from '../hooks/useSound'

type SoundButtonProps = {
  sound: AVPlaybackSource
  title: string
}

export default function SoundButton({ sound, title }: SoundButtonProps) {
  const { playSound, stopSound, isPlaying } = useSound(sound)
  const onButtonPress = () => {
    isPlaying ? stopSound() : playSound()
  }

  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onButtonPress}
    >
      <View style={styles.content}>
        {isPlaying ? (
          <Ionicons name="ios-pause-circle" size={32} />
        ) : (
          <Ionicons name="ios-play-circle" size={32} />
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#222',
  },
})
