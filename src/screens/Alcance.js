import React from "react";
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";

export default function Alcance(){
    return(
        <ScrollView>
        <View>
            <Text style={styles.textos} >El Técnico en Programación estará capacitado para realizar programas o componentes de sistemas 
                de computación – interpretar especificaciones de diseño, documentar los productos realizados, 
                verificar los componentes programados, buscar causas de malfuncionamiento y corregir los programas 
                o adaptarlos a cambios en las especificaciones – desarrollando las actividades descriptas en el 
                perfil profesional y cumpliendo con los criterios de realización establecidos para las mismas en 
                el marco de un equipo de trabajo organizado por proyecto. {"\n"}</Text>
            <Image style={styles.imagenes} source={ require('../images/programacion1.jpg')} 
            style={{ width: "100%" , height: 400 }}
            />
            <Text style={styles.textos}>Actividades profesionales cubren las siguientes áreas:</Text>
            <Text style={styles.textos}>#“Interpretar especificaciones de diseño o requisitos de las asignaciones a programar”.</Text>
            <Text style={styles.textos}>#"Planificar su trabajo en el contexto del equipo de desarrollo del proyecto y de la tecnología a utilizar”.</Text>
            <Text style={styles.textos}>#“Producir programas, módulos o componentes de sistemas de computación”.</Text>
            <Text style={styles.textos}>#“Verificar y depurar el producto desarrollado “.</Text>
            <Text style={styles.textos}>#“Realizar revisiones cruzadas de código o de interfaces”.</Text>
            <Text style={styles.textos}>#“Realizar la documentación técnica y de usuarios de acuerdo con los requerimientos funcionales y técnicos de las aplicaciones y sistemas”.</Text>
            <Text style={styles.textos}>#“Explotar las funcionalidades de los sistemas de información, hardware, software y redes”.
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

