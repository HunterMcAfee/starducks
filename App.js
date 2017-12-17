import React, { Component } from 'react'
import { View } from 'react-native'
import MenuList from './src/components/MenuList'
import menuItems from './src/fixtures/menuItems'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#eef0f2', paddingTop: 22 }}>
        <MenuList data={menuItems} />
      </View>
    )
  }
}
