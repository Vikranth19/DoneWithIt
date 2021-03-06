import React from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

export default function MessagesScreen() {
  //dummy data
  const messages = [
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/mosh.jpg'),
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/mosh.jpg'),
    },
  ]

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  )
}
