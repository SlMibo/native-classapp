import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './src/components/home';
import Lista from './src/components/checklist';
import Perfil from './src/components/profile';
import { Login } from './src/pages/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Taller de Programación IV'>
        <Stack.Screen name="Taller de Programación IV" component={Home} />
        <Stack.Screen name="Tareas" component={Lista} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App