import { AVPlaybackSource } from 'expo-av'

import carIgnition from '../assets/sounds/car-ignition.wav'
import carTireInflate from '../assets/sounds/car-tire-inflate.wav'
import hammeringNails from '../assets/sounds/hammering-nails.wav'
import pneumaticGreaseBomb from '../assets/sounds/pneumatic-grease-bomb.wav'
import pneumaticHammer from '../assets/sounds/pneumatic-hammer.wav'

export type SoundData = {
  id: string
  sound: AVPlaybackSource
  title: string
}

export const data: SoundData[] = [
  { id: '1', sound: carTireInflate, title: 'Encher Pneu' },
  { id: '2', sound: pneumaticGreaseBomb, title: 'Encher Pneu 2' },
  { id: '3', sound: pneumaticHammer, title: 'Martelo Pneumático' },
  { id: '4', sound: hammeringNails, title: 'Martelo' },
  { id: '5', sound: carIgnition, title: 'Ligar Carro' },
]
