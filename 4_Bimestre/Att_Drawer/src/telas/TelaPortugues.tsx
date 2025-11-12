// src/telas/TelaPortugues.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';

export default function TelaPortugues() {
  return (
    <ScrollView style={estilos.container}>
      <Cabecalho titulo="Português" />
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>Português</Text>
        <Text style={estilos.texto}>
          Desenvolvimento da comunicação técnica, redação e interpretação de textos.
        </Text>

        <Text style={estilos.subtitulo}>Tópicos principais:</Text>
        <Text style={estilos.item}>• Redação técnica e acadêmica</Text>
        <Text style={estilos.item}>• Interpretação e produção de texto</Text>
        <Text style={estilos.item}>• Norma culta e coesão textual</Text>
        <Text style={estilos.item}>• Documentação de software</Text>
        <Text style={estilos.item}>• Apresentação de projetos</Text>
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