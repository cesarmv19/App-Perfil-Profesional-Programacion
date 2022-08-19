
import * as React from 'react';
import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/screens/Home";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}