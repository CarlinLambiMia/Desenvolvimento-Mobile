import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {styles} from "./styles"
import {Event} from "../../components/Event"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Projeto de desenvolvimento mobile</Text>
      <TextInput style={styles.input} placeholder='Digite o evento' placeholderTextColor="#fff"></TextInput>
      <Button title="Botão" onPress={() =>console.log("Teste")} color={'#005f5f'}/>
      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={()=>{Alert.alert("Teste de botão")}}>
        <Text style={styles.buttonText}>Botão teste</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

