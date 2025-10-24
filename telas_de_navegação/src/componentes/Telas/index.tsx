import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Telas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nomes das Telas</Text>
      <Text style={styles.texto}>
        Perceba que cada aba representa uma tela do aplicativo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  titulo: { fontSize: 26, fontWeight: "bold" },
  texto: { marginTop: 8, fontSize: 16 },
});