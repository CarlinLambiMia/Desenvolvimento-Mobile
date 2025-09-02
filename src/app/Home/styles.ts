import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
        padding: 16
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
        flex: 1
    },  
    buttonText: {
        color: "fff",
        fontSize: 20
    },
    button: {
        backgroundColor:"#2196F3",
        width:56,
        height: 56,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    form: {
        width:"100%",
        flexDirection: "row"
    }
})