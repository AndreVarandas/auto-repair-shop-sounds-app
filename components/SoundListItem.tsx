import { SoundData } from '../data/data'
import SoundButton from './SoundButton'

type SoundListItemProps = {
  item: SoundData
}

export default function SoundListItem({ item }: SoundListItemProps) {
  return <SoundButton sound={item.sound} title={item.title} key={item.id} />
}
