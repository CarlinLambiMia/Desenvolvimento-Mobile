import { Component } from "react"
import { StyleSheet, View, Text } from "react-native"

export function MatematicaPage() { 
    return(
        <View style={styles.component}>
            <Text style={styles.title}>Matemática</Text>
            <Text style={styles.text}>Estamamos aprendendo Geometria Analítica.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    component: { 
        marginTop: 40,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    title: { 
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0d5becff',
    },
    text: { 
        fontSize: 14,
        textAlign: 'center',
        color: '#888888ff',
        fontWeight: 600,
    }
})