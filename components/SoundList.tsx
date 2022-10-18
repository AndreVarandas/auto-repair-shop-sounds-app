import { FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native'

import { SoundData, data } from '../data/data'
import SoundListItem from './SoundListItem'

export default function SoundList() {
  const renderSoundItem: ListRenderItem<SoundData> = ({
    item,
  }: ListRenderItemInfo<SoundData>) => <SoundListItem item={item} />

  return (
    <FlatList
      data={data}
      renderItem={renderSoundItem}
      keyExtractor={(item) => item.id}
    />
  )
}
