import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  Image,
  Alert,
  Button,
  Platform,
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './app/components/AppText/AppText'
import WelcomeScreen from './app/screens/WelcomeScreen'
import AppButton from './app/components/AppButton'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import MessagesScreen from './app/screens/MessagesScreen'

export default function App() {
  // console.log(Dimensions.get('screen'))
  // console.log(useDimensions())
  // console.log(useDeviceOrientation())

  const { landscape } = useDeviceOrientation()

  return <MessagesScreen />
}

//does not validate properties
const containerStyle = { backgroundColor: 'orange' }

//validates the properties, but just plain js object doesn't ensure validity
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
