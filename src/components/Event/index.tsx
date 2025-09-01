import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export function Event(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Evento de alunos</Text>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}