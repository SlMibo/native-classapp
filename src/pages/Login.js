import { StatusBar } from "expo-status-bar"
import { container, text, input, button } from "../styles/style"
import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { NativeBaseProvider } from "native-base"
import { useState } from "react"
import useSession from "../hooks/useSession"
import SERVER from "../Services";

export function Login({ navigation }) {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const { login } = useSession()

  const validate = () => {
    if (form.usuario === undefined) {
      setErrors({ ...errors, usuario: "* Campo obligatorio" })
      return false
    } else if (form.password === undefined) {
      setErrors({ ...errors, password: "* Campo obligatorio" })
      return false
    }
    return true
  }

  const handleSubmitForm = async () => {
    const datos = {
      usuario: form.usuario,
      clave: form.password
    }
    const url = `${SERVER}/login`
    const content = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    }
    const response = await fetch(url, content)
    const json = await response.json()
    if(response.ok) {
      setForm({})
      setErrors({})
      login(json.user)
      navigation.navigate('Home')
    } else {
      setErrors({...errors, login: json.message})
    }
  }

  const onSubmit = () => {
    validate() && handleSubmitForm()
  }

  return (
    <NativeBaseProvider>
      <View style={container}>
        <View>
          <StatusBar style="auto" />
          <View style={input}>
            <TextInput
              name="usuario"
              style={text}
              placeholder="Usuario"
              placeholderTextColor="#a3a3a3"
              value={form.usuario}
              onChangeText={(value) => setForm({ ...form, usuario: value })}
            />
          </View>

          {"usuario" in errors && <Text>{errors.usuario}</Text>}

          <View style={input}>
            <TextInput
              name="password"
              style={text}
              placeholder="Contraseña"
              placeholderTextColor="#a3a3a3"
              secureTextEntry={true}
              value={form.password}
              onChangeText={(value) => setForm({ ...form, password: value })}
            />
          </View>

          {"password" in errors && <Text>{errors.usuario}</Text>}

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>¿Aún no tienes cuenta? Regístrate</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onSubmit}>
            <Text style={button}>Iniciar sesión</Text>
          </TouchableOpacity>

          {"login" in errors && <Text>{errors.login}</Text>}
        </View>
      </View>
    </NativeBaseProvider>
  );
}