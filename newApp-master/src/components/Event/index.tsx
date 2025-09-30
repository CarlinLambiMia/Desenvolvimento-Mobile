import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { CircleCheck, X } from 'lucide-react-native';

type Item = {
  nome: string;
  valor: number;
};

export function Event() {
  const [texto, setTexto] = useState("");
  const [valor, setValor] = useState("");
  const [lista, setLista] = useState<Item[]>([]);

  const adicionarItem = () => {
    if (texto.trim() !== "" && valor.trim() !== "" && !isNaN(Number(valor))) {
      const novoItem: Item = { nome: texto, valor: Number(valor) };
      setLista([...lista, novoItem]);
      setTexto("");
      setValor("");
    }
  };

  const excluirItem = (index: number) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  // Soma total dos valores
  const somaTotal = lista.reduce((acc, item) => acc + item.valor, 0);

  return (
    <View style={styles.container}>
      {/* Inputs */}
      <View style={styles.grupo}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome..."
          placeholderTextColor="white"
          value={texto}
          onChangeText={setTexto}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o valor..."
          placeholderTextColor="white"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={adicionarItem}>
          <CircleCheck size={32} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Soma Total: R$ {somaTotal}</Text>
      </View>

      {/* Lista */}
      <FlatList
        style={styles.borda}
        data={lista}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemContent}>
              <CircleCheck size={18} color="white" />
              <Text style={styles.itemText}>
                {item.nome} – R$ {item.valor}
              </Text>
            </View>
            <TouchableOpacity onPress={() => excluirItem(index)}>
              <X size={18} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
  },
  grupo: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "white",
    color: "white",
    padding: 8,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginVertical: 15,
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  borda: {
    marginTop: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  itemText: {
    color: "white",
    fontSize: 16,
  },
});