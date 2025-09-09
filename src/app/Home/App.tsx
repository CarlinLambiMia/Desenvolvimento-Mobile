import { Alert, Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./styles";
import {Item} from "../../components/Event"

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista de Compras</Text>
            <View style={styles.Conteudo}>
                <View style={styles.form}>
                <TextInput style={styles.input} placeholder='Digite o item' placeholderTextColor={'#fff'}></TextInput>
                <TouchableOpacity  style={styles.button} onPress={()=>{Alert.alert("Teste Botão")}}>
                <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
                </View>
                <View style={styles.borda}>
                    <Item name = "Maçã"/>
                    <Item name = "Banana"/>
                    <Item name = "Caqui"/>
                </View>
            </View>
        </View>
        
    )
}