import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MenuList from './src/components/MenuList'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F7F9' }}>
        <MenuList />
      </View>
    )
  }
}
