import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import TelaHome from "../componentes/TelaHome";
import Telas from "../componentes/Telas"; // Antes: TelaBiblioteca
import TelaBiblioteca from "../componentes/TelaBiblioteca"; // Antes: TelaDescricao

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Feather.glyphMap = "home";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Telas") { // Antes: Biblioteca
            iconName = "monitor";
          } else if (route.name === "Biblioteca") { // Antes: Descrição
            iconName = "book-open";
          }

          return (
            <Feather
              name={iconName}
              size={focused ? size + 2 : size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={TelaHome} />
      <Tab.Screen name="Telas" component={Telas} /> 
      <Tab.Screen name="Biblioteca" component={TelaBiblioteca} />
    </Tab.Navigator>
  );
}
