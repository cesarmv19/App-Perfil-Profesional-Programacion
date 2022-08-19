import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Campo(){
    return(
        <ScrollView>
        <View>
            <Text style={styles.textos}>El campo de formación en el que se encuentra mi espacio curricular es el de prácticas 
                profesionalizantes, porque está destinado a posibilitar la integración y contrastación de los 
                saberes construidos en la formación de los otros campos, y garantizar la articulación 
                teoría-práctica en los procesos formativos a través del acercamiento de los estudiantes a 
                situaciones reales de trabajo, y poniendo a los estudiantes en contacto con diferentes situaciones 
                y problemáticas que permitan tanto la identificación del objeto de la práctica profesional 
                como la del conjunto de procesos técnicos, tecnológicos, científicos, culturales, sociales y 
                jurídicos que se involucran en la diversidad de situaciones socioculturales y productivas que 
                se relacionan con un posible desempeño profesional.
            </Text>
            <Image source={ require('../images/programacion2.jpg')} 
            style={{ width: "100%", height: 400 }} />
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