import React, { useState } from "react";
import {View, Text, ScrollView,TouchableOpacity,Alert,} from "react-native";
import { styles } from "./styles";
import { Input } from "./src/components/Input";
import { Itens } from "./src/components/Itens";
import Entypo from "@expo/vector-icons/Entypo";

type Propriedade = {
  id: string;
  nomeProprietario: string;
  tipoPropriedade: string;
  medidaLargura: number;
  medidaComprimento: number;
  areaTotal: number;
};

export default function App() {
  const [listaPropriedades, setListaPropriedades] = useState<Propriedade[]>([]);
  const [nomeProprietario, setNomeProprietario] = useState("");
  const [tipoPropriedade, setTipoPropriedade] = useState("");
  const [medidaLargura, setMedidaLargura] = useState("");
  const [medidaComprimento, setMedidaComprimento] = useState("");

  function registrarPropriedade() {
    if (
      nomeProprietario.trim() === "" ||
      tipoPropriedade.trim() === "" ||
      medidaLargura.trim() === "" ||
      medidaComprimento.trim() === ""
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const larguraConvertida = parseFloat(medidaLargura.replace(",", "."));
    const comprimentoConvertido = parseFloat(medidaComprimento.replace(",", "."));

    if (
      isNaN(larguraConvertida) ||
      isNaN(comprimentoConvertido) ||
      larguraConvertida <= 0 ||
      comprimentoConvertido <= 0
    ) {
      Alert.alert(
        "Erro",
        "Digite valores numéricos válidos e positivos para largura e comprimento!"
      );
      return;
    }

    const areaCalculada = larguraConvertida * comprimentoConvertido;

    const novaPropriedade: Propriedade = {
      id: String(Date.now()),
      nomeProprietario,
      tipoPropriedade,
      medidaLargura: larguraConvertida,
      medidaComprimento: comprimentoConvertido,
      areaTotal: areaCalculada,
    };

    setListaPropriedades([...listaPropriedades, novaPropriedade]);
    setNomeProprietario("");
    setTipoPropriedade("");
    setMedidaLargura("");
    setMedidaComprimento("");
  }

  function removerPropriedade(indice: number) {
    setListaPropriedades(listaPropriedades.filter((_, i) => i !== indice));
  }

  const somaTotalArea = listaPropriedades.reduce(
    (acc, item) => acc + item.areaTotal,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Propriedades</Text>

      <View style={{ flexDirection: "column", gap: 10, marginBottom: 20, marginTop: 30 }}>
        <Input
          placeH="Nome do Proprietário"
          onChangeText={setNomeProprietario}
          value={nomeProprietario}
        />
        <Input
          placeH="Tipo da Propriedade"
          onChangeText={setTipoPropriedade}
          value={tipoPropriedade}
        />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Input
            placeH="Largura (m)"
            onChangeText={setMedidaLargura}
            value={medidaLargura}
            keyboardType="numeric"
            style={{ flex: 1 }}
          />
          <Input
            placeH="Comprimento (m)"
            onChangeText={setMedidaComprimento}
            value={medidaComprimento}
            keyboardType="numeric"
            style={{ flex: 1 }}
          />
        </View>
        <TouchableOpacity onPress={registrarPropriedade} style={{ alignSelf: "flex-end", marginTop: 5 }}>
          <Entypo name="check" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerList}>
        <ScrollView>
          {listaPropriedades.length === 0 ? (
            <Text
              style={{
                textAlign: "center",
                color: "#F2EFEB",
                marginTop: 150,
                fontSize: 20,
              }}
            >
              Nenhuma propriedade cadastrada
            </Text>
          ) : (
            listaPropriedades.map((item, index) => (
              <Itens
                key={item.id}
                chave={index}
                name={`Proprietário: ${item.nomeProprietario}\nTipo: ${item.tipoPropriedade}\nTerreno: ${item.areaTotal.toFixed(2)} m²`}
                onDelete={removerPropriedade}
              />
            ))
          )}
        </ScrollView>
      </View>

      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          color: "#F2EFEB",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Área Total Cadastrada: {somaTotalArea.toFixed(2)} m²
      </Text>
    </View>
  );
}
