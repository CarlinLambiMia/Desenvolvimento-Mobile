import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F57474',
        paddingTop: 50,
        padding: 16,
    },
    text: {
        color: '#fff',
        fontSize: 36,
        
    },
    input: {
        backgroundColor: "#1f1e25",
        borderRadius: 8,
        height: 56,
        marginTop: 30,
        width: "82.5%",
        paddingLeft: 10
    },  
    buttonText: {
        color: "#fff",
        fontSize: 20
    },
    button: {
        backgroundColor:"#fff",
        width:56,
        height: 56,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    form: {
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    borda: {
        width: "100%",
        borderWidth: 3,
        borderColor: "#fff",
        marginTop: 20,
        height: "82.5%",
        borderRadius: 15,
        alignItems: "center"
    },
    Conteudo: {
        alignItems: "center",
    }
})