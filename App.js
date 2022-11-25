import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from "react-native"
import { NativeBaseProvider } from "native-base"
import { useEffect, useState } from "react"
import Home from './src/pages/Home.jsx';
import { Login } from './src/pages/Login';
import TabMenu from './src/components/TabMenu.jsx'
import useSession from "./src/hooks/useSession"
import UserContext from './src/context/UserContext.jsx'
// import Lista from './src/components/checklist';
// import Perfil from './src/components/profile';

const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(["EventEmitter.removeListener"])
export default function App() {
  const [token, setToken] = useState('aaaaa')
  const [initial, setInitial] = useState('')
  const { usuario } = useSession()

  useEffect(() => {
    if(usuario === null) {
      setInitial('Login')
    } else {
      setInitial('Home')
    }
  })
  return (
    <>
    <UserContext.Provider value={{token, setToken}}>
      <NativeBaseProvider>
        <NavigationContainer>

          <Stack.Navigator initialRouteName={initial}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
              // props={Stack.Navigator}
            />
            <Stack.Screen
              name="Home"
              component={TabMenu}
              options={{
                headerShown: false,
                tabBarStyle: { display: 'none' }
              }}
              // props={Stack.Navigator}
            />
          </Stack.Navigator>

        </NavigationContainer>
      </NativeBaseProvider>
    </UserContext.Provider>
    </>
  )
}