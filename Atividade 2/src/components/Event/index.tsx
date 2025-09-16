import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import React from "react";
import {Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {
    name:string,
    onClick?: () => void
}

export function Event({name}:Props) {
    return (
        <View style={styles.contener}>
            <AntDesign name="check" size={24} color="black" />
            <Text style={styles.textEvent}>{name}</Text>
        </View>
    );
}