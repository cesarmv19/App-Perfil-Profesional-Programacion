import React from "react";
import {View, Text, Button, StyleSheet, TouchableHighlight, ScrollView} from "react-native";
import AlertSalida from "../components/AlertSalida";

export default function Home(props){
    const {navigation} = props;

    /**
     * <Button style={styles.button} color= 'cadetblue' title="Ver alcances de la orientación" onPress={() => navigation.navigate("alcance") } />
            <Button style={styles.button} color= 'cadetblue' title="Ver Campo de formación al cual pertenece" onPress={() => navigation.navigate("campo") } />
            <Button style={styles.button} color= 'cadetblue' title="Ver Área o ámbito ocupacional" onPress={() => navigation.navigate("area") } />
            <Button style={styles.button} color= 'cadetblue' title="Ver Aportes de la espacio al perfil" onPress={() => navigation.navigate("aportes") } />
     */
    return(
        <ScrollView>
          <Text style={styles.text}>Bienvenidos a la APP del Perfil Técnico de Programación{"\n"}
        {"\n"}</Text>
          <Text style={styles.textDesc}>Esta APP fue desarrollada para el módulo Práctica Profesional Docente III
          a fin de contextualizar nuestro espacio curricular con el perfil técnico.{"\n"}
        {"\n"}</Text>
          
        <View>
            

            
            <TouchableHighlight>
            <Text style = {styles.button}  onPress={() => navigation.navigate("alcance") }>
            Alcances de la orientación
            </Text>
         </TouchableHighlight>
         <TouchableHighlight>
            <Text style = {styles.button} onPress={() => navigation.navigate("campo") }>
            Campo de formación al cual pertenece
            </Text>
         </TouchableHighlight>
         <TouchableHighlight>
            <Text style = {styles.button} onPress={() => navigation.navigate("area") }>
            Área o ámbito ocupacional
            </Text>
         </TouchableHighlight>
         <TouchableHighlight>
            <Text style = {styles.button}  onPress={() => navigation.navigate("aportes") }>
            Aportes de la espacio curricular al perfil
            </Text>
         </TouchableHighlight>
        </View>
        <View>
          <AlertSalida />
        </View>
        <Text style={styles.textDesc}>
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        Creado por el alumno Vergara César Martín
        </Text>
        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    text: {
      color: 'black',
      fontSize: 34,
      textAlign: "center",
    },
    button:{
        fontSize: 30,
        borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'cadetblue',
      color: 'white',
    },
    textDesc:{
      fontSize: 20,
      textAlign: 'center'
    },
    
  });

