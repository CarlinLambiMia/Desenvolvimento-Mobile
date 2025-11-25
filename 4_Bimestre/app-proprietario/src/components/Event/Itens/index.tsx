import { styles } from "./styles";
import { Button, Text, Touchable, TouchableOpacity, View, TextInputProps } from 'react-native';

type Props = {
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    onPress?: () => void;
}

export function Itens({ nome, cpf, telefone, email, onPress }: Props) {
    return (
        <View style={styles.contener}>
            <View style={styles.textItem}>
                <Text style={styles.text}>{nome}</Text>
                <Text style={styles.text}>{cpf}</Text>
                <Text style={styles.text}>{telefone}</Text>
                <Text style={styles.text}>{email}</Text>
            </View>
        </View>
    );
}