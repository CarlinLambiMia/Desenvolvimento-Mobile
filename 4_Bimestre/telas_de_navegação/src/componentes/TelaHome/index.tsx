import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TelaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Como Navegar?</Text>
      <Text style={styles.texto}>
        Toque nas abas abaixo para navegar entre as telas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  titulo: { fontSize: 26, fontWeight: "bold" },
  texto: { marginTop: 8, fontSize: 16 },
});
