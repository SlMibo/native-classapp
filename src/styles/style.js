import { Dimensions } from "react-native-web";

const screenHeight = Dimensions.get('screen').height;

const buttonContainer = {
  bottom: screenHeight -50 ,
  right: 20,
  position: 'absolute',
}

const addButton = {
  alignItems: 'center',
  backgroundColor: '#1CC48D',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: 25,
}

const addButtonText = {
  color: 'white',
  fontSize: 30,
}

const inputTask = {
  backgroundColor: '#D7FFF2',
  padding: 10,
}

const acceptButton = {
  padding: 5,
  borderRadius: 5,
  backgroundColor: '#28E377',
  color: 'white',
  fontSize: 15,
}

const button = {
  padding: 5,
  alignSelf: 'flex-start',
}

const cancelButton = {
  padding: 5,
  borderRadius: 5,
  backgroundColor: '#F37E4F',
  color: 'white',
  fontSize: 15,
}

const containerTask = {
  backgroundColor: '#1BD195',
  padding: 10,
  flexDirection: 'row',
  marginBottom: 5
}

const buttonTask = {
  backgroundColor: 'white',
  width: 30,
  height: 30
}

const textTask = {
  color: 'white',
  marginLeft: 10,
  fontSize: 20
}

export {
    buttonContainer,
    addButton,
    addButtonText,
    inputTask,
    acceptButton,
    button,
    cancelButton,
    containerTask,
    buttonTask,
    textTask
};
  