import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import AppText from './AppText/AppText'
import colors from '../config/colors'

export default function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  subTitle: {
    color: colors.medium,
  },
})
