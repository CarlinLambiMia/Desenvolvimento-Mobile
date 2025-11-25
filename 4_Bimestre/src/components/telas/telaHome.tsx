import { StyleSheet, Text, View, Image } from 'react-native';

export default function telaHome() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://1.bp.blogspot.com/-iv0Q-hAQsyc/W4yIEMKeTjI/AAAAAAAADf0/PCnnBIsu-VIPktDe0RoC6yAdSwb6LjTKACK4BGAYYCw/w1200-h630-p-k-no-nu/matema.jpg' }} style={styles.image}/>
            <Text style={styles.texto}>
                Essa é a imagem que representa o curso de matematica
            </Text>
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    texto: {
        fontSize: 16,
        textAlign: 'center',
    },
});