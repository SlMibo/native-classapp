import React from 'react';
import { View, Text, Button } from 'react-native';


const Home = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
		  <Text>Welcome</Text>
		  <Button
        title="Lista de tareas"
        onPress={() => navigation.push('Tareas')}
      />
    </View>
  )
}

export default Home