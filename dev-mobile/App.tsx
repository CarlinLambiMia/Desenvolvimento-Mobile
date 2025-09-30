import { ScrollView, Text, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Input } from "./src/components/Input";
import { Itens } from "./src/components/Itens";
import AntDesign from "@expo/vector-icons/AntDesign";

type Produto = {
  nome: string;
  preco: number;
};

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoAdd, setProdutoAdd] = useState("");
  const [precoAdd, setPrecoAdd] = useState("");

  function adicionarProduto() {
    if (produtoAdd.trim() === "" || precoAdd.trim() === "") {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const precoNumero = parseFloat(precoAdd.replace(",", "."));
    if (isNaN(precoNumero)) {
      Alert.alert("Erro", "Digite um valor numérico válido para o preço!");
      return;
    }

    const novoProduto: Produto = {
      nome: produtoAdd,
      preco: precoNumero,
    };

    setProdutos([...produtos, novoProduto]);
    setProdutoAdd("");
    setPrecoAdd("");
  }

  function apagarItem(chave: number) {
    setProdutos(produtos.filter((_, index) => index !== chave));
  }

  const total = produtos.reduce((acc, item) => acc + item.preco, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de compras</Text>

      {/* Inputs e botão lado a lado */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 20, marginTop: 30  }}>
        <Input
          placeH="Produto"
          onChangeText={setProdutoAdd}
          value={produtoAdd}
          style={{ flex: 2 }}
        />
        <Input
          placeH="Preço"
          onChangeText={setPrecoAdd}
          value={precoAdd}
          keyboardType="numeric"
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={adicionarProduto}>
          <AntDesign name="plus-circle" size={35} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <View style={styles.containerList}>
        <ScrollView>
          {produtos.length === 0 ? (
            <Text
              style={{
                display: "flex",
                textAlign: "center",
                color: "#F2EFEB",
                marginTop: 150,
                fontSize: 20,
              }}
            >
              Não tem itens
            </Text>
          ) : (
            produtos.map((item, index) => (
              <Itens
                key={index}
                chave={index}
                name={`${item.nome} - R$ ${item.preco.toFixed(2)}`}
                onDelete={apagarItem}
              />
            ))
          )}
        </ScrollView>
      </View>

      {/* Total */}
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          color: "#F2EFEB",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Total: R$ {total.toFixed(2)}
      </Text>
    </View>
  );
}
