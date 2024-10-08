import useSound from '../hooks/useSound'
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

type SoundButtonProps = {
  sound: AVPlaybackSource
  title: string
  icon: ImageSourcePropType
}

export default function SoundButton({ sound, title, icon }: SoundButtonProps) {
  const { playSound, stopSound, isPlaying } = useSound(sound)
  const onButtonPress = () => (isPlaying ? stopSound() : playSound())

  return (
    <TouchableHighlight
      style={styles.container}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onButtonPress}
    >
      <View style={styles.content}>
        {isPlaying ? (
          <Ionicons style={styles.contentIcon} name="pause-circle" size={28} />
        ) : (
          <Ionicons style={styles.contentIcon} name="play-circle" size={28} />
        )}
        <ImageBackground style={styles.icon} source={icon} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    margin: 5,
  },
  contentIcon: {
    position: 'absolute',
    right: 0,
    color: 'darkgrey',
  },
  container: {
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
