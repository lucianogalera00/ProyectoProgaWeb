
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Input from '../componentes/input';
import Boton from '../componentes/boton';


export default function Login({ navigation }) {
  return (
   
    <View style={styles.container}>
       <View style={styles.loginContainer}>
      <Text style={styles.titulo}>Inicio De Sesion</Text>
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          
      <Text>{"\n"}</Text>
      <Text style={styles.letra}>Email</Text>
      <Input/>
      <Text style={styles.letra}>Contraseña</Text>
      <Input/>
      <Text style={styles.letra}>¿No tienes cuenta?
      <Pressable style={styles.registro} onPress={() => navigation.navigate('Registro')}> Registrate</Pressable>
      </Text>
      <Pressable style={styles.letracolor} >¿Olvidaste tu contraseña?</Pressable>
      
      <Boton/>
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 42,
    fontWeight: 500,
  },
  container: {
    flex: 1,
    backgroundColor: '#154360',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  letracolor: {
    fontSize: 15,
    fontWeight: 500,
    color: "blue",
 },
letra:{
  fontWeight: 580,
  marginLeft: 10,
}, 
 registro: {
    textDecorationLine: 'underline',
    color: "black",
    
  },
}); 