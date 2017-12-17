/**
 * @name MenuList
 * @description React component that returns a FlatList from React Native
 *
 * @description This will take a list of items as props
 *
 */
import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import MenuItem from './MenuItem'

export default class MenuList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Text
            style={{
              margin: 20,
              fontSize: 20,
              textAlign: 'center',
              color: '#a2a2a2'
            }}
          >
            Holiday Menu
          </Text>
        }
        renderItem={({ item }) => <MenuItem item={item} />}
      />
    )
  }
}
