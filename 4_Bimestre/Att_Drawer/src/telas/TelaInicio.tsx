// src/telas/TelaInicio.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../componentes/Cabecalho';

export default function TelaInicio() {
  return (
    <View style={estilos.container}>
      <Cabecalho titulo="Bem-vindo ao App de Disciplinas" />
      <View style={estilos.conteudo}>
        <Text style={estilos.mensagem}>
          Use o menu lateral para navegar pelas disciplinas do semestre.
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  conteudo: { padding: 25, alignItems: 'center' },
  mensagem: { fontSize: 18, color: '#2c3e50', textAlign: 'center', lineHeight: 28 },
});