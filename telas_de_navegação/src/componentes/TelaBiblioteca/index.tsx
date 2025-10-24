import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TelaBiblioteca() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Qual biblioteca usamos?</Text>
      <Text style={styles.texto}>
        Das bibliotecas que usamos podemos destacar duas:
      </Text>
      <Text style={styles.texto}>
        @react-navigation/native e 
      </Text><Text style={styles.texto}>
        @react-navigation/bottom-tabs
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20, justifyContent: "center" },
  titulo: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  texto: { fontSize: 16, textAlign: "justify", marginBottom: 10 },
});
