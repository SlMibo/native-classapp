import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { buttonTask, containerTask, textTask } from '../styles/style'
import CheckBox from 'expo-checkbox';

const TaskItem = ({ task }) => {

  const [ready, setReady] = useState(false);

  return (
    <View style = { containerTask }>
      <CheckBox
        style = { buttonTask }
        value={ready}
        onValueChange={() => setReady(!ready)}
        color={ready ? '#22FB8B' : undefined}
      />
      <Text style = { textTask }>{ task }</Text>
    </View>
  )
}

export default TaskItem;