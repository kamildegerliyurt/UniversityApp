import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import UniversityList from './screens/UniversityList'
import UniversityDetails from './screens/UniversityDetails'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='UniversityList'
       screenOptions={{headerShown: false}}>
        <Stack.Screen name="UniversityList" component={UniversityList} />
        <Stack.Screen name="UniversityDetails" component={UniversityDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})