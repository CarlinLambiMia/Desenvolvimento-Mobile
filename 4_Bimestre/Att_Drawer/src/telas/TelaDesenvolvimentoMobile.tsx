// src/telas/TelaDesenvolvimentoMobile.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';

export default function TelaDesenvolvimentoMobile() {
  return (
    <ScrollView style={estilos.container}>
      <Cabecalho titulo="Desenvolvimento Mobile" />
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>Desenvolvimento Mobile</Text>
        <Text style={estilos.texto}>
          Disciplina que ensina a criar aplicativos nativos para Android e iOS usando React Native.
        </Text>

        <Text style={estilos.subtitulo}>Tópicos principais:</Text>
        <Text style={estilos.item}>• Componentes e JSX</Text>
        <Text style={estilos.item}>• Navegação (Stack, Drawer, Tab)</Text>
        <Text style={estilos.item}>• Gerenciamento de estado</Text>
        <Text style={estilos.item}>• Estilização com StyleSheet</Text>
        <Text style={estilos.item}>• Integração com APIs</Text>
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