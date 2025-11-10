import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";
import { Input } from "./src/components/Input";

type Produto = {
  nome: string;
  produtor: string;
  preco: number;
  quantidade: number;
};

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nomeAdd, setNomeAdd] = useState("");
  const [produtorAdd, setProdutorAdd] = useState("");
  const [precoAdd, setPrecoAdd] = useState("");

  function adicionarProduto() {
    if (!nomeAdd.trim() || !produtorAdd.trim() || !precoAdd.trim()) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const precoNumero = parseFloat(precoAdd.replace(",", "."));
    if (isNaN(precoNumero)) {
      Alert.alert("Erro", "Digite um valor válido para o preço!");
      return;
    }

    const novoProduto: Produto = {
      nome: nomeAdd,
      produtor: produtorAdd,
      preco: precoNumero,
      quantidade: 1,
    };

    setProdutos([...produtos, novoProduto]);
    setNomeAdd("");
    setProdutorAdd("");
    setPrecoAdd("");
  }

  function alterarQuantidade(index: number, tipo: "mais" | "menos") {
    const novaLista = produtos.map((item, i) => {
      if (i === index) {
        const novaQtd =
          tipo === "mais"
            ? item.quantidade + 1
            : item.quantidade > 1
            ? item.quantidade - 1
            : 1;
        return { ...item, quantidade: novaQtd };
      }
      return item;
    });
    setProdutos(novaLista);
  }

  function removerProduto(index: number) {
    setProdutos(produtos.filter((_, i) => i !== index));
  }

  const totalProdutos = produtos.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );
  const taxaEntrega = 5;
  const totalFinal = totalProdutos + taxaEntrega;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho de Compras</Text>

      {/* Inputs */}
      <View style={{ flexDirection: "row", gap: 10, marginVertical: 20 }}>
        <Input
          placeH="Produto"
          value={nomeAdd}
          onChangeText={setNomeAdd}
          style={{ flex: 2 }}
        />
        <Input
          placeH="Produtor"
          value={produtorAdd}
          onChangeText={setProdutorAdd}
          style={{ flex: 2 }}
        />
        <Input
          placeH="Preço"
          value={precoAdd}
          onChangeText={setPrecoAdd}
          keyboardType="numeric"
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={adicionarProduto}>
          <AntDesign name="plus-circle" size={35} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <ScrollView style={{ flex: 1, width: "100%" }}>
        {produtos.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              marginBottom: 10,
              padding: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.nome}
            </Text>
            <Text style={{ color: "#555" }}>{item.produtor}</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => alterarQuantidade(index, "menos")}
                >
                  <AntDesign name="minus-circle" size={22} color="#E53935" />
                </TouchableOpacity>
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {item.quantidade}
                </Text>
                <TouchableOpacity
                  onPress={() => alterarQuantidade(index, "mais")}
                >
                  <AntDesign name="plus-circle" size={22} color="#4CAF50" />
                </TouchableOpacity>
              </View>

              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => removerProduto(index)}
              style={{ marginTop: 5 }}
            >
              <Text style={{ color: "#E53935", textAlign: "right" }}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Total */}
      <View
        style={{
          marginTop: 10,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          paddingTop: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: "#444" }}>
          Taxa de entrega: R$ {taxaEntrega.toFixed(2)}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 5,
            color: "#000",
          }}
        >
          Total do pedido: R$ {totalFinal.toFixed(2)}
        </Text>
      </View>
    </View>
  );
}