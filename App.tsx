import React from 'react'
import { SafeAreaView, Platform } from 'react-native'
import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <WebView
        source={{
          // uri: 'https://www.juejin.cn'
          uri: `${
            Platform.OS === 'android' ? 'file:///android_asset/' : ''
          }Web.bundle/index.html`,
        }}
        originWhitelist={['*']}
        style={{
          flex: 1,
        }}
      />
    </SafeAreaView>
  )
}

export default App
