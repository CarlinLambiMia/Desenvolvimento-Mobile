import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import telaHome from '@/components/telas/tela_four';
import telaBiblioteca from '@/components/telas/tela_two';
import telaDescricao from '@/components/telas/tela_one';

const Tabs = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{headerShown: false}}>

        <Tabs.Screen name="Home" component = { telaHome } 
        options={{
          tabBarIcon:() =><Feather name="home" color={"blue"} size={30}/>
        }}
        />
        <Tabs.Screen name="Biblioteca" component = { telaBiblioteca } 
        options={{
          tabBarIcon:() =><Feather name="book-open" color={"blue"} size={30}/>
        }}
        />
        <Tabs.Screen name="Telas" component = { telaDescricao } 
        options={{
          tabBarIcon:() =><Feather name="monitor" color={"blue"} size={30}/>
        }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export const styles = StyleSheet.create({
  cont: { 
    flex: 1,
    backgroundColor: '#f7f9fc',
    paddingTop: 50,
    alignItems: 'center',
  },

  text: { 
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
  },
});
