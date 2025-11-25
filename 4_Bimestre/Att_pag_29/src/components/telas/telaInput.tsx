import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

export default function telaInput() {
    const [primeiroInput, setPrimeiroInput] = useState('');
    const [segundoInput, setSegundoInput] = useState('');
    const [listaDeInformacoes, setListaDeInformacoes] = useState<string[]>([]);

    const AdicionarItem = () => {
        const novaInformacao = `Primeira informação: ${primeiroInput}\n segunda informação: ${segundoInput}`;
        setListaDeInformacoes(prevLista => [novaInformacao, ...prevLista]); 
        setPrimeiroInput('');
        setSegundoInput('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Adicionar as Informações</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite uma informação"
                value={primeiroInput}
                onChangeText={setPrimeiroInput}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite a segunda informação"
                value={segundoInput}
                onChangeText={setSegundoInput}
            />
            <Button title="imprimir informações" onPress={AdicionarItem} />

            <FlatList
                data={listaDeInformacoes}
                style={styles.list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.listItemText}>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fc',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        width: '100%',
        marginBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    list: {
        width: '100%',
        marginTop: 20,
    },
    listItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#eee',
    },
    listItemText: {
        fontSize: 16,
        color: '#444',
    },
});