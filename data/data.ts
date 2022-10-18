import { AVPlaybackSource } from 'expo-av'

import carIgnition from '../assets/sounds/car-ignition.wav'
import carTireInflate from '../assets/sounds/car-tire-inflate.wav'
import hammeringNails from '../assets/sounds/hammering-nails.wav'
import impactPistol from '../assets/sounds/impact-pistol.mp3'
import pneumaticGreaseBomb from '../assets/sounds/pneumatic-grease-bomb.wav'
import pneumaticHammer from '../assets/sounds/pneumatic-hammer.wav'
import serviceBell from '../assets/sounds/service-bell.mp3'

export type SoundData = {
  id: string
  sound: AVPlaybackSource
  title: string
}

export const data: SoundData[] = [
  { id: '1', sound: carTireInflate, title: 'Encher Pneu' },
  { id: '2', sound: pneumaticGreaseBomb, title: 'Encher Pneu 2' },
  { id: '3', sound: pneumaticHammer, title: 'Martelo Pneumático' },
  { id: '4', sound: impactPistol, title: 'Pistola de Impacto' },
  { id: '5', sound: hammeringNails, title: 'Martelo' },
  { id: '6', sound: carIgnition, title: 'Ligar Carro' },
  { id: '7', sound: serviceBell, title: 'Sino de Serviço' },
]
