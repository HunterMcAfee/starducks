/**
 * @name MenuList
 * @description React component that returns a FlatList from React Native
 *
 * @description This will take a list of items as props
 *
 */
import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import menuItems from '../fixtures/menuItems'
import MenuItem from './MenuItem'

export default class MenuList extends Component {
    render() {
        return (
            <FlatList
                data={menuItems}
                keyExtractor={item => item}
                renderItem={value => <MenuItem item={value.item} />}
            />
        )
    }
}