import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Aportes(){
    return(
        <ScrollView>
        <View>
            <Text style={styles.textos}>Enmarcando desde los alcances del perfil profesional a continuación se nombra los que aporta el 
                espacio curricular de Laboratorio de Desarrollo de Aplicaciones II del 5° del perfil Técnico en 
                programación:</Text>
        <Text style={styles.textos}>“Interpretar especificaciones de diseño o requisitos de las asignaciones a programar”.</Text>
        <Text style={styles.textos}>“Planificar su trabajo en el contexto del equipo de desarrollo del proyecto y de la tecnología a utilizar”.</Text>
        <Text style={styles.textos}>“Producir programas, módulos o componentes de sistemas de computación”.</Text>
        <Text style={styles.textos}>“Verificar y depurar el producto desarrollado “.</Text>
        <Text style={styles.textos}>“Realizar revisiones cruzadas de código o de interfaces”.</Text>
        <Text style={styles.textos}>
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        </Text>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    textos:{
        fontSize: 20,
        backgroundColor: 'cadetblue',
        color: 'white'
    },
})