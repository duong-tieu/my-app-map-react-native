import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
        <TabNavigation />

      
    </NavigationContainer>
  );
}
