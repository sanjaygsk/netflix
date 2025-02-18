import React from 'react'
import { Image, View } from 'react-native'

const App = () => {

  

  return (
    <View style={{ flex: 1, backgroundColor: "#231F1F", justifyContent: "center", alignItems: "center", paddingHorizontal: 16 }}>
        <Image source={require('./assets/images/full_logo.png')} style={{height: 100, width: 200}} />
    </View>
  )
}

export default App