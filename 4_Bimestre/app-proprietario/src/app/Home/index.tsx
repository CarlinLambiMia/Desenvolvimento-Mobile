import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';

export default function TelaHome() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/Fazenda.jpg')} blurRadius={6} />
            <View style={styles.main}>
                <View style={styles.text}>
                    <Text style={styles.titul}>Farm Confia</Text>
                    <Text style={styles.descri}>Aqui você encontra fazenda de confiança.</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}