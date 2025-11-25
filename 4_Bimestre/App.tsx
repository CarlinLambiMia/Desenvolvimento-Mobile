import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

import telaHome from '@/components/telas/telaHome';
import telaInput from '@/components/telas/telaInput';
import telaApi from '@/components/telas/telaApi';

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
        <Tabs.Screen name="input" component = { telaInput } 
        options={{
          tabBarIcon:() =><Feather name="inbox" color={"blue"} size={30}/>
        }}
        />
        <Tabs.Screen name="Api" component = { telaApi } 
        options={{
          tabBarIcon:() =><AntDesign name="monitor" color={"blue"} size={30}/>
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
