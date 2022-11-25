import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';
import UserContext from '../context/UserContext' 


const Home = ({ navigation, route }) => {
  const {token, setToken} = useContext(UserContext)
  // console.log(route)
  console.log('token =>',token)
  //const { usuario } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
		  <Text>Welcome</Text>
      {console.log(navigation)}
		  {/* <Button
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
      /> */}
    </View>
  )
}

export default Home