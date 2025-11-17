import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavegacao from './src/navegacao/DrawerNavegacao';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavegacao />
    </NavigationContainer>
  );
}