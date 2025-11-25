import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';

type Props = TextInputProps& {
    placeH: string,
}

export default function Input({placeH, onChangeText, value}:Props) {
    return (
        <View style={styles.contener_input}>
            <TextInput style={styles.input} placeholder={placeH} placeholderTextColor={"#b6b8c0"} onChangeText={onChangeText} value={value}/>
        </View>
    );
}