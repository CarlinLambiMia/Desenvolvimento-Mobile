import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

type Produto = {
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
};

export default function CarrinhoDeCompras() {
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [listaDeProdutos, setListaDeProdutos] = useState<Produto[]>([]);

  const TAXA_ENTREGA = 5.00;

  function adicionarProduto() {
    if (nomeProduto.trim() && descricaoProduto.trim() && precoProduto.trim() && !isNaN(Number(precoProduto))) {
      const novoProduto: Produto = {
        nome: nomeProduto,
        descricao: descricaoProduto,
        preco: Number(precoProduto),
        quantidade: 1,
      };
      setListaDeProdutos([...listaDeProdutos, novoProduto]);
      setNomeProduto("");
      setDescricaoProduto("");
      setPrecoProduto("");
    }
  }

  function alterarQuantidade(index: number, delta: number) {
    setListaDeProdutos((produtos) =>
      produtos.map((produto, i) =>
        i === index
          ? { ...produto, quantidade: Math.max(1, produto.quantidade + delta) }
          : produto
      )
    );
  }

  function removerProduto(index: number) {
    setListaDeProdutos((lista) => lista.filter((_, i) => i !== index));
  }

  const subtotalPedido = listaDeProdutos.reduce(
    (soma, produto) => soma + produto.preco * produto.quantidade,
    0
  );

  const totalComEntrega = subtotalPedido + TAXA_ENTREGA;

  return (
    <View style={estilos.telaPrincipal}>
      <StatusBar style="light" />
      <Text style={estilos.tituloPagina}>🛒 Meu Carrinho de Compras</Text>

      {/* Inputs e botão de adicionar - MESMA LARGURA */}
      <View style={estilos.areaDeCadastro}>
        <TextInput
          style={estilos.campoDeEntrada}
          placeholder="Nome do produto..."
          placeholderTextColor="#ccc"
          value={nomeProduto}
          onChangeText={setNomeProduto}
        />
        <TextInput
          style={estilos.campoDeEntrada}
          placeholder="Descrição..."
          placeholderTextColor="#ccc"
          value={descricaoProduto}
          onChangeText={setDescricaoProduto}
        />
        <TextInput
          style={estilos.campoDeEntrada}
          placeholder="Preço..."
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={precoProduto}
          onChangeText={setPrecoProduto}
        />
        <TouchableOpacity style={estilos.botaoAdicionar} onPress={adicionarProduto}>
          <Text style={estilos.textoBotaoAdicionar}>Adicionar Produto</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de produtos - LARGURA FIXA E ALTURA FIXA */}
      <View style={estilos.containerLista}>
        <FlatList
          data={listaDeProdutos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            const subtotal = item.preco * item.quantidade;
            return (
              <View style={estilos.cartaoProduto}>
                <Text style={estilos.nomeProduto}>{item.nome}</Text>
                <Text style={estilos.descricaoProduto}>{item.descricao}</Text>
                <Text style={estilos.precoUnitario}>R$ {item.preco.toFixed(2)}</Text>

                {/* Controle de quantidade */}
                <View style={estilos.controleQuantidade}>
                  <TouchableOpacity
                    onPress={() => alterarQuantidade(index, -1)}
                    style={estilos.botaoQuantidade}
                  >
                    <Feather name="minus" size={16} color="white" />
                  </TouchableOpacity>
                  <Text style={estilos.textoQuantidade}>{item.quantidade}</Text>
                  <TouchableOpacity
                    onPress={() => alterarQuantidade(index, +1)}
                    style={estilos.botaoQuantidade}
                  >
                    <Feather name="plus" size={16} color="white" />
                  </TouchableOpacity>
                </View>

                {/* Subtotal */}
                <Text style={estilos.textoSubtotal}>Subtotal: R$ {subtotal.toFixed(2)}</Text>

                {/* Botão remover */}
                <TouchableOpacity
                  onPress={() => removerProduto(index)}
                  style={estilos.botaoRemover}
                >
                  <AntDesign name="delete" size={16} color="white" />
                  <Text style={estilos.textoBotaoRemover}>Remover</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Rodapé */}
      <View style={estilos.rodape}>
        <Text style={estilos.textoEntrega}>🚚 Taxa de entrega: R$ {TAXA_ENTREGA.toFixed(2)}</Text>
        <Text style={estilos.textoTotal}>💰 Total: R$ {totalComEntrega.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const LARGURA_FIXA = 350;

const estilos = StyleSheet.create({
  telaPrincipal: {
    flex: 1,
    backgroundColor: '#3a3c3b',
    alignItems: 'center',
    padding: 16,
  },
  tituloPagina: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  areaDeCadastro: {
    width: LARGURA_FIXA, 
    alignItems: 'center',
    marginBottom: 16,
  },
  campoDeEntrada: {
    width: '100%', 
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 10,
    backgroundColor: '#2a2c2b',
  },
  botaoAdicionar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002b5c',
    borderRadius: 8,
    width: '100%', 
    height: 50,
    marginTop: 5,
  },
  textoBotaoAdicionar: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerLista: {
    width: LARGURA_FIXA, 
    height: 430, 
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 12,
    padding: 8,
    backgroundColor: '#2a2c2b',
  },
  cartaoProduto: {
    backgroundColor: '#4a4c4b',
    borderRadius: 8,
    marginVertical: 6,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#002b5c',
  },
  nomeProduto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  descricaoProduto: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 4,
  },
  precoUnitario: {
    color: '#8BC34A',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  controleQuantidade: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    alignSelf: 'flex-start',
    backgroundColor: '#5a5c5b',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  botaoQuantidade: {
    padding: 6,
  },
  textoQuantidade: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  textoSubtotal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  botaoRemover: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4444',
    borderRadius: 6,
    padding: 8,
    alignSelf: 'flex-end',
  },
  textoBotaoRemover: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  rodape: {
    width: LARGURA_FIXA, // 👈 MESMA LARGURA
    padding: 10,
    marginTop: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  textoEntrega: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 4,
  },
  textoTotal: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});