import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet, BackHandler } from 'react-native'

const AlertSalida = () => {
  

   const showAlert = () =>{
      Alert.alert(
         'Gracias por utilizar la APP',
         
      )
      BackHandler.exitApp();
   }
   return (
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text style = {styles.boton} >Salir</Text>
      </TouchableOpacity>
   )
}
export default AlertSalida

const styles = StyleSheet.create ({
   button: {
      backgroundColor: 'cadetblue',
      width: "100%",
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      marginTop: 100,
   },
   boton:{
    color: "white",
    fontSize: 30,
    textAlign: 'center'
   }
})