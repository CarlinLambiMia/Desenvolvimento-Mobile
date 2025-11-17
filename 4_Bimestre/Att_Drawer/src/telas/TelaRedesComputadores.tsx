// src/telas/TelaRedesComputadores.tsx
import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';

export default function TelaRedesComputadores() {
  return (
    <ScrollView style={estilos.container}>
      <Cabecalho titulo="Redes de Computadores" />
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>Redes de Computadores</Text>
        <Text style={estilos.texto}>
          Estudo dos fundamentos de comunicação de dados, protocolos e arquiteturas de redes.
        </Text>

        <Text style={estilos.subtitulo}>Tópicos principais:</Text>
        <Text style={estilos.item}>• Modelo OSI e TCP/IP</Text>
        <Text style={estilos.item}>• Endereçamento IP (IPv4 e IPv6)</Text>
        <Text style={estilos.item}>• Protocolos: HTTP, DNS, DHCP</Text>
        <Text style={estilos.item}>• Roteamento e comutação</Text>
        <Text style={estilos.item}>• Segurança de redes</Text>
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