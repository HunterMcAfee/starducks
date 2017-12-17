/**
 * @name MenuItem
 * @description React component that returns an item in the FlatList
 *
 * @description This will take an item as props
 *
 */
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class MenuItem extends Component {
  render() {
    const { item } = this.props
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 8,
          marginHorizontal: 10,
          marginVertical: 8,
          shadowColor: '#8a8a8a',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.8,
        }}
      >
        <Text
          style={{
            margin: 10,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#0bb0ff',
          }}
        >
          {item.title}
        </Text>
        <Image
          source={{ uri: item.imageSource }}
          style={{ width: '100%', height: 200, resizeMode: 'cover' }}
        />
      </View>
    )
  }
}
