import { AVPlaybackSource, AVPlaybackStatus } from 'expo-av'
import { Sound } from 'expo-av/build/Audio'
import { useEffect, useState } from 'react'

export default function useSound(audio: AVPlaybackSource) {
  const [sound, setSound] = useState<Sound | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playSound = async () => {
    const updateStatus = (status: AVPlaybackStatus) => {
      if (status.isLoaded) {
        setIsPlaying(status?.isPlaying)
      }
    }

    const { sound } = await Sound.createAsync(
      audio,
      { shouldPlay: true },
      updateStatus
    )
    setSound(sound)

    await sound.playAsync()
  }

  const stopSound = async () => {
    await sound?.stopAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return { playSound, stopSound, isPlaying }
}
