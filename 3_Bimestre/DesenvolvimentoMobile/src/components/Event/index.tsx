import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./styles";

// Determinando a tipagem tipagem pro props
type Props = {
    name: string,
    onClick?: ()=>void
}

export function Item({name}:Props){
    return(
        <View style={styles.container}>
            <AntDesign name="checkcircle" size={18} color="#fff" />
            <Text style={styles.text}>{name}</Text> 
        </View>
    )
}

