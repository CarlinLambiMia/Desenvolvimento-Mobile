import { Alert, Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import {Event} from "../../components/Event"

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome Evento</Text>
            <View style={styles.form}>
            <TextInput style={styles.input} placeholder='Digite o evento' placeholderTextColor={'#fff'}></TextInput>
            <TouchableOpacity  style={styles.button} onPress={()=>{Alert.alert("Teste Botão")}}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            </View>
            <Event name = "Evento Novo"></Event>
            <Event name = "Evento Cancelado"></Event>
        </View>
        
        
    )
}