import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import TelaBiblioteca from './src/componentes/TelaBiblioteca';
import TelaDescricao from './src/componentes/TelaDescricao';
import TelaHome from './src/componentes/TelaHome';
import TelaRotas from './src/componentes/TelaHome';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}