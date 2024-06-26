import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../prueba/screens/login';
import Registro from '../prueba/screens/registro' ;


const Stack = createStackNavigator();


 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Inicio" component={Login} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  </NavigationContainer>
);

}


export default App;