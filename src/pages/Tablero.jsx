import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';


const Tablero = ({ navigation }) => {
  const [data, setData] = useState([]);

  const handleSubmitForm = async () => {
    const url = `${SERVER}/anuncio`
    const content = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify(datos),
    }
    const response = await fetch(url, content)
    const json = await response.json()
    response.ok && setData(json)
    
    
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
		  <Text>Anuncios</Text>
      {
        data.length > 0
        ? data.map((element, key) => (
          <Text key={key}>{element.descripcion}</Text>
          ))
        : <Tex>No hay anuncios para mostrar</Tex>
      }
      {/* <TouchableOpacity onPress={handleSubmitForm}>
        <Text>Ver anuncios</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default Tablero