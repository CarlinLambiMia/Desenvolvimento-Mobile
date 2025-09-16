import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { Event } from '../../components/Event';
import { Button, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function App() {
    const[count, setCount] = useState(0);
    const[countTen, setCountTen] = useState(10);
    const[countHund, setCountHund] = useState(100);

    function handleClick() {
        console.log("Botão foi clicado");
        setCount(val => val+1);
        setCountTen(val => val+10);
        setCountHund(val => val+100);
    }

    return (
        <View style={styles.container}>
            <Text>Teste no netState</Text>
            <Button onPress={handleClick} title='Click aqui'></Button>
            <Text>Contador 1: {count}</Text>
            <Text>Contador 10: {countTen}</Text>
            <Text>Contador 1: {countHund}</Text>
        </View>
    )
}