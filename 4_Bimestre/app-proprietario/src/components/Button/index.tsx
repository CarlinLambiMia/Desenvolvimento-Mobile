import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Text, Touchable, TouchableOpacity, View, } from 'react-native';

type Props = {
    title: string,
    onPress: () => void;
}

export default function ButtonBusc({ title, onPress }: Props) {
    return (
        <View style={styles.contener_input}>
            <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.5}>
                <Text style={styles.textButton}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}