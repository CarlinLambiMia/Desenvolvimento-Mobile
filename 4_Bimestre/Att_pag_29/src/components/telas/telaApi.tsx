import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

export default function telaApi() {
    const [dados, setDados] = useState(null);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const consultarApi = async () => {
        setCarregando(true);
        setErro('');
        try {
            const resposta = await axios.get('https://apivacinacao.dev.vilhena.ifro.edu.br/proprietarios/');
            setDados(resposta.data);
        } catch (e) {
            setErro('Falha ao buscar os dados da API.');
            Alert.alert('Erro', 'Não foi possível carregar os dados.');
            console.error(e);
        } finally {
            setCarregando(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Consultar dados da api</Text>
            <Button title="Consultar Dados da API" onPress={consultarApi} disabled={carregando} />
            {carregando && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}
            {erro && <Text style={styles.errorText}>{erro}</Text>}
            {dados && (
                <ScrollView style={styles.scrollView}>
                    <Text>{JSON.stringify(dados, null, 2)}</Text>
                </ScrollView>
            )}
        </View>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    scrollView: {
        marginTop: 20,
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});
