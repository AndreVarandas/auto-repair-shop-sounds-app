import Ionicons from '@expo/vector-icons/Ionicons'
import { AVPlaybackSource } from 'expo-av'
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import useSound from '../hooks/useSound'

type SoundButtonProps = {
  sound: AVPlaybackSource
  title: string
  icon: ImageSourcePropType
}

export default function SoundButton({ sound, title, icon }: SoundButtonProps) {
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
          <Ionicons style={styles.controls} name="ios-pause-circle" size={28} />
        ) : (
          <Ionicons style={styles.controls} name="ios-play-circle" size={28} />
        )}
        <ImageBackground style={styles.iconContainer} source={icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    width: 50,
    margin: 5,
  },
  controls: {
    position: 'absolute',
    right: 0,
    color: 'darkgrey',
  },
  button: {
    flex: 1,
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
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: '#222',
  },
})
