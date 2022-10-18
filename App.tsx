import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, View } from 'react-native'

import faiscaMcqueen from './assets/faisca.webp'
import SoundList from './components/SoundList'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.logo} source={faiscaMcqueen} />
      <View style={styles.list}>
        <SoundList />
      </View>
      <StatusBar style="inverted" />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
  },
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})
