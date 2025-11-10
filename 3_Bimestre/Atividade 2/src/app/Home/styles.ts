import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom:+10
    },

    caberacio_container: {
        display: "flex",
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingBottom: 20,
    },

    contener_person: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        width: "100%",
    },

    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        marginBottom: 15,
    },

    contener_resultado: {
        display: "flex",
        flex: 1,
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 20,
        gap: 12,
        padding: 10,
    },

    contener_salve: {
        display: "flex",
        width: "60%"
    },

    text_titul: {
        textAlign: "left",
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        paddingBottom: 20,
    },

    text_legend: {
        fontSize: 17,
        textAlign: 'left',
        paddingBottom: 10,
    },

    input: {
        flex: 1,
        textAlign: 'left',
        padding: 10,
        borderWidth: 8,
        borderRadius: 8,
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: 55,
        height: 55, 
        borderWidth: 8,
    },

});
