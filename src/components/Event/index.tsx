import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

type Props ={
    name:string,
    onClick?: ()=>void
}

export function Event({name}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

