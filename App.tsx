import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import repairShop from './assets/repair-shop.jpg'
import SoundList from './components/SoundList'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={3} style={styles.logo} source={repairShop}>
        <Text style={styles.logoText}>✨ A oficina ✨</Text>
      </ImageBackground>
      <SoundList />
      <StatusBar style="inverted" />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
  },
  logoText: {
    color: '#ddd',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    padding: 10,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  container: {
    flex: 1,
  },
})
