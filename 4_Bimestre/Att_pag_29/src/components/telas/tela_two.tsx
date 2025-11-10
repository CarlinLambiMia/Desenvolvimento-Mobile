import { StyleSheet, Text, View } from 'react-native';

export default function telaBiblioteca() {
    return (
        <View style={styles.cont}>
            <Text style={styles.text}>Tela Biblioteca</Text>
            <Text>Tela de biblioteca</Text>
        </View>

    );
};

export const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: '#f7f9fc',
        paddingTop: 50,
        alignItems: 'center',
    },

    text: {
        fontSize: 32,
        color: '#0749f0',
        textAlign: 'center',
    },
});
