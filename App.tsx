import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Projeto de desenvolvimento mobile</Text>
      <TextInput style={styles.campo} placeholder='Digite se confirma' placeholderTextColor="red"/>
      <Button title="Botão" onPress={() =>console.log("Teste")} color={'#005f5f'}/>
      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={()=>console.log("Teste de botão")}>
        <Text style={styles.buttonText}>Botão teste</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:20,
  }
});
