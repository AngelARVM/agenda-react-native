import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button,  } from 'react-native';
import Card from './src/components/Card'

export default function App() {
  const initialState = {
    nombre: "",
    numero: "",
    url: "",
  }
  const [agenda, setAgenda] = useState([])
  const [inputs, setInputs] = useState(initialState)

  const validations = () => {
    const {nombre, numero, url} = inputs
    return !!nombre && !!numero 
  }

  const handleChange = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const handleDelete = (id) => {
    console.log('here')
    const newAgenda = agenda.filter(contact => contact.id !== id)
    setAgenda(newAgenda)
  }

  const handleClick = () => {
    if(validations()){
      setAgenda([...agenda, {
        ...inputs,
        id: Math.random().toFixed(12) * (10**12)
      }])
      setInputs(initialState)
    }
  }

  return (
    <View style={styles.container}>
      <View styles={styles.span}>
        <TextInput
          name="nombre"
          placeholder={"Nombre"} 
          style={styles.input}
          value={inputs.nombre}
          onChangeText={value => handleChange("nombre", value)}
        />
      </View>
      <View styles={styles.span}>
        <TextInput
          name="numero"
          placeholder={"Numero"} 
          style={styles.input}
          value={inputs.numero}
          onChangeText={value => handleChange("numero", value)}
        />
      </View>
      <View styles={styles.span}>
        <TextInput
          name="url"
          placeholder={"Image URL"} 
          style={styles.input}
          value={inputs.url}
          onChangeText={value => handleChange("url", value)}
        />
      </View>
      
      <Button
        title="Agendar"
        onPress={() => handleClick()}
        color="#a9d"
      />
      {
        agenda?.map((contacto,i) => 
          <Card key={i}
            nombre={contacto.nombre}
            numero={contacto.numero}
            imgUrl={contacto.url}  
            onPress={() => handleDelete(contacto.id)}
          />
        )
      }
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  span: {
    flex:1,
    flexDirection: "row",
  },
  input: {
    textAlign: 'center'
  }
});
