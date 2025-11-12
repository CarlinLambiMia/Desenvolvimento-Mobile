// src/componentes/Cabecalho.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CabecalhoProps {
  titulo: string;
}

export default function Cabecalho({ titulo }: CabecalhoProps) {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.texto}>{titulo}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#3498db',
    paddingVertical: 16,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});