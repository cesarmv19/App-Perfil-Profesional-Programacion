import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";

export default function Area(){
    return(
        <ScrollView>
        <View>
        <Text style={styles.textos}>#Servicios informáticos para pequeñas y medianas empresas en áreas de análisis y programación de 
            desarrollo y producción de software.</Text>
        <Text style={styles.textos}>#Empresas de distintos sectores de actividad económica en áreas de informática o de procesamiento 
            de datos.</Text>
        <Text style={styles.textos}>#Por cuenta propia o en pequeños emprendimientos asociativos de desarrollo y producción de software.</Text>
        <Text style={styles.textos}>#Empresas de servicios de implantación y mantenimiento de sistemas informáticos.</Text>
        <Text style={styles.textos}>#Comercialización de equipos y sistemas informáticos.</Text>
        <Text style={styles.textos}>#Administración pública, en las áreas de mantenimiento y gestión de la información</Text>
        <Text style={styles.textos}>#ONGs, en áreas vinculadas con el procesamiento de datos para la gestión.</Text>
        <Text style={styles.textos}>#Mantenimiento de sistemas informáticos en entornos personales y de redes de área local.</Text>
        <Text style={styles.textos}>#Asesoramiento técnico y venta de sistemas y aplicaciones informáticas.</Text>
        <Text style={styles.textos}>
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