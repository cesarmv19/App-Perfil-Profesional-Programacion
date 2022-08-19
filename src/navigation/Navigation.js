import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home";
import Alcance from "../screens/Alcance";
import Campo from "../screens/Campo";
import Area from "../screens/Area";
import Aportes from "../screens/Aportes";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
      
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} options={{title: 'Perfil Técnico Programación'}} />
          <Stack.Screen name="alcance" component={Alcance} options={{title: 'Alcances de la orientación'}} />
          <Stack.Screen name="campo" component={Campo} options={{title: 'Campo de formación'}} />
          <Stack.Screen name="area" component={Area} options={{title: 'Área o ámbito ocupacional'}} />
          <Stack.Screen name="aportes" component={Aportes} options={{title: 'Aportes a la orientación'}} />
        </Stack.Navigator>

    );
  }