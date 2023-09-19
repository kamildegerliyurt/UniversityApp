import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import UniList from './screen/UniList'
import UniDetails from './screen/UniDetails'


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();




const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='UniList'
       screenOptions={{headerShown: false}}>
        <Stack.Screen name="UniList" component={UniList} />
        <Stack.Screen name="UniDetails" component={UniDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
