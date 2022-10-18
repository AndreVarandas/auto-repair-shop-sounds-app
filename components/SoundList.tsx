import { FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native'

import { SoundData, data } from '../data/data'
import SoundListItem from './SoundListItem'

export default function SoundList() {
  const renderSoundItem: ListRenderItem<SoundData> = ({
    item,
  }: ListRenderItemInfo<SoundData>) => <SoundListItem item={item} />

  return (
    <FlatList
      style={{ margin: 5 }}
      numColumns={2}
      data={data}
      renderItem={renderSoundItem}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      keyExtractor={(item) => item.id}
    />
  )
}
