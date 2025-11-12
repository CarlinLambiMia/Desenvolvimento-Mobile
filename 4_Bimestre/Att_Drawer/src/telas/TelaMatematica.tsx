// src/telas/TelaMatematica.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';

export default function TelaMatematica() {
  return (
    <ScrollView style={estilos.container}>
      <Cabecalho titulo="Matemática" />
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>Matemática</Text>
        <Text style={estilos.texto}>
          Fundamentos matemáticos aplicados à computação e lógica de programação.
        </Text>

        <Text style={estilos.subtitulo}>Tópicos principais:</Text>
        <Text style={estilos.item}>• Álgebra linear</Text>
        <Text style={estilos.item}>• Cálculo diferencial e integral</Text>
        <Text style={estilos.item}>• Estatística e probabilidade</Text>
        <Text style={estilos.item}>• Lógica matemática</Text>
        <Text style={estilos.item}>• Teoria dos números</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  conteudo: { padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50', marginBottom: 12 },
  texto: { fontSize: 16, color: '#34495e', marginBottom: 20, lineHeight: 24 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', color: '#2980b9', marginTop: 10, marginBottom: 8 },
  item: { fontSize: 16, color: '#2c3e50', marginLeft: 15, marginVertical: 3 },
});