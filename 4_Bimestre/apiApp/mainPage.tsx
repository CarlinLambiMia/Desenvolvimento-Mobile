import axios from "axios"
import { useEffect, useState } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"

export function MainPage() {
    const[listar, setListar] = useState<any[]>([]);

    
    function ListarProprietarios() {
        axios.get("https://apivacinacao.dev.vilhena.ifro.edu.br/proprietarios").then((resposta) => {
            setListar(resposta.data)
        }) 
    }

    useEffect(() => {ListarProprietarios();}, []);
    return (
        <ScrollView>
            {listar.map((item, index) => (
                <View key={index} style={styles.container}> 
                    <Text>nome:{item.nome} - telefone: {item.telefone}
                    </Text>
                </View>
            ))}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: { 
        alignItems: "center",
        padding: 16,
    },

})