import React from 'react';
import { View, Text, Button } from 'react-native';


const Home = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
		  <Text>Welcome</Text>
		  <Button
        title="Mi perfil"
        onPress={() => navigation.push('Perfil')}
      />
      <Button
        title="Tablero de anuncios"
        onPress={() => navigation.push('Tareas')}
      />
      <Button
        title="Inicio de sesión"
        onPress={() => navigation.push('Login')}
      />
    </View>
  )
}

export default Home