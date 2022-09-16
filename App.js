import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import PanResponderScreen from './screens/PanResponder';
import NavigationListScreen from './screens/NavigationList';
import Gallery from './screens/Gallery';
import Pokedex from './screens/Pokedex';

export default function App() {

  const Root = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name={"Navigation"} component={NavigationListScreen} />
        <Root.Screen name={"PanResponder"} component={PanResponderScreen} />
        <Root.Screen name={"Gallery"} component={Gallery} />
        <Root.Screen name={"Pokedex"} component={Pokedex} />
      </Root.Navigator>
    </NavigationContainer>
  )
}
