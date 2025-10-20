import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";
import { Input } from "./src/components/Input";

type Alimento = {
  nome: string;
  calorias: number;
};

export default function App() {
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);
  const [alimentoAdd, setAlimentoAdd] = useState("");
  const [caloriaAdd, setCaloriaAdd] = useState("");

  function adicionarAlimento() {
    if (alimentoAdd.trim() === "" || caloriaAdd.trim() === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const caloriasNumero = parseFloat(caloriaAdd.replace(",", "."));
    if (isNaN(caloriasNumero)) {
      Alert.alert("Erro", "Digite um valor válido para as calorias!");
      return;
    }

    const novoAlimento: Alimento = {
      nome: alimentoAdd,
      calorias: caloriasNumero,
    };

    setAlimentos([...alimentos, novoAlimento]);
    setAlimentoAdd("");
    setCaloriaAdd("");
  }

  function removerAlimento(index: number) {
    setAlimentos(alimentos.filter((_, i) => i !== index));
  }

  const totalCalorias = alimentos.reduce(
    (acc, item) => acc + item.calorias,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calorias</Text>

      {/* Inputs */}
      <Input
        placeH="Digite o alimento"
        value={alimentoAdd}
        onChangeText={setAlimentoAdd}
      />
      <Input
        placeH="Digite as calorias"
        value={caloriaAdd}
        onChangeText={setCaloriaAdd}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botaoAdd} onPress={adicionarAlimento}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      {/* Cabeçalho */}
      <View style={styles.headerLista}>
        <Text style={styles.headerItem}>Item</Text>
        <Text style={styles.headerItem}>Calorias</Text>
        <TouchableOpacity onPress={() => setAlimentos([])}>
          <Text style={styles.limpar}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <ScrollView style={styles.scroll}>
        {alimentos.map((item, index) => (
          <View key={index} style={styles.itemLista}>
            <Text style={styles.nomeItem}>{item.nome}</Text>
            <Text style={styles.caloriaItem}>{item.calorias} kcal</Text>
            <TouchableOpacity onPress={() => removerAlimento(index)}>
              <AntDesign name="delete" size={20} color="#999" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Total */}
      <View style={styles.totalBox}>
        <Text style={styles.totalTexto}>{totalCalorias} kcal</Text>
      </View>
    </View>
  );
}
