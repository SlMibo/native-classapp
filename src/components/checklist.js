import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { addButton, addButtonText, buttonContainer, inputTask, acceptButton, button, cancelButton } from '../styles/style'
import TaskItem from './list';

const Lista = () => {

  const  [addTask, setAddTask]  = useState(false);
    const [task, setTask]  = useState('');
  const [tarea, setTarea] = useState([]);

  const Tarea = () => {
    setTarea(currentTask => [...currentTask, task]);
    setTask('');
    setAddTask(false);
  };

  const renderTaskItem = (row) => {
    return <TaskItem task={row.item}/>
  }

  return (
    <View style = {{ margin: 20, }}>
      
      {
        addTask && (
          <View>
            <TextInput 
              onChangeText = { setTask }
              placeholder = 'Agregar tarea'
              style = { inputTask }
              value = { task }
            />
            <View style = {{ marginVertical: 10, flexDirection: 'row', }}>
              <TouchableOpacity style = { button }>
                <Text style = { acceptButton }
                  onPress = {Tarea} 
                >Agregar</Text>
              </TouchableOpacity>

              <TouchableOpacity style = { button }>
                <Text
                  style = { cancelButton }
                  onPress = { () => setAddTask(false) }
                >Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }

      <FlatList 
        data = { tarea }
        keyExtractor = { (item) => item }
        renderItem = {renderTaskItem}
      />
      
    <View style = { buttonContainer }>
        <TouchableOpacity 
        style = { addButton }
        onPress = { () => setAddTask(true) }>
            <Text style = { addButtonText }>
            +</Text>
        </TouchableOpacity>
    </View>


    </View>
  )
}

export default Lista