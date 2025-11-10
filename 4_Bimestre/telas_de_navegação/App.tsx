import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navegacao/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
