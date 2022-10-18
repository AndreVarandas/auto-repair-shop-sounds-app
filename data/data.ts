import { AVPlaybackSource } from 'expo-av'
import { ImageSourcePropType } from 'react-native'

import bellIcon from '../assets/icons/bell.png'
import hammerIcon from '../assets/icons/hammer.png'
import handDrillIcon from '../assets/icons/hand-drill.png'
import jackHammerIcon from '../assets/icons/jackhammer.png'
import jeepIcon from '../assets/icons/jeep.png'
import tiresIcon from '../assets/icons/tires.png'
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
  icon: ImageSourcePropType
}

export const data: SoundData[] = [
  { id: '1', sound: carTireInflate, title: 'Encher Pneu', icon: tiresIcon },
  {
    id: '2',
    sound: pneumaticGreaseBomb,
    title: 'Encher Pneu 2',
    icon: tiresIcon,
  },
  {
    id: '3',
    sound: pneumaticHammer,
    title: 'Martelo Pneumático',
    icon: jackHammerIcon,
  },
  {
    id: '4',
    sound: impactPistol,
    title: 'Pistola de Impacto',
    icon: handDrillIcon,
  },
  { id: '5', sound: hammeringNails, title: 'Martelo', icon: hammerIcon },
  { id: '6', sound: carIgnition, title: 'Ligar Carro', icon: jeepIcon },
  { id: '7', sound: serviceBell, title: 'Sino de Serviço', icon: bellIcon },
]
