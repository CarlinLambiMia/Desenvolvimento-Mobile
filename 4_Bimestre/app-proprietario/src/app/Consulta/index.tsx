import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { SafeAreaView, ScrollView, Text, TextInput, Touchable, TouchableOpacity, View, Button } from 'react-native';
import axios from 'axios';
import Input from '../../components/Input';
import ButtonBusc from '../../components/Button';
import { Itens } from '../../components/Event/Itens';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

type Props = {
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
}

export default function TelaConsulta() {
    const [busca, setBusca] = useState("");
    const [list, setList ] =  useState<Props[]>([]);
    const url = "https://apivacinacao.dev.vilhena.ifro.edu.br/proprietarios"

    async function listaProprietarios() {
        try {
            const resposta = await axios.get(url)
            setList(resposta.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        listaProprietarios();
    }, []);

    //Função de busca por nome (É uma forma de fazer nova "Para Mim" sem ter a rota na url)
    async function buscarProprietario() {
        try {
            if (busca.trim() === "") {
                return listaProprietarios();
            }
            
            const resposta = await axios.get(url);
            const filtro = resposta.data.filter((p: Props) => 
                p.nome.toLowerCase().includes(busca.toLowerCase())
            )
            setList(filtro);

        } catch(error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.contener_person}>
                    <View style={styles.contener_titul}>
                        <Text style={styles.subtitul}>Consultar Proprietarios</Text>
                    </View>
                    <View style={styles.contener_input}>
                        <Input placeH='Digite nome do proprietario' onChangeText={setBusca} value={busca} />
                        <ButtonBusc title='Buscar' onPress={buscarProprietario} />
                    </View>
                    <View style={styles.contener_list}>
                        <ScrollView contentContainerStyle={{ width: "100%"}}>
                            {
                                list.map((item, index) => (
                                    <Itens
                                        key={index}
                                        nome={item.nome}
                                        cpf={item.cpf}
                                        telefone={item.telefone}
                                        email={item.email}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}