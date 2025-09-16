import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "black",
        paddingTop: 10,
        gap: 10,
    },

    textEvent: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        textAlign: "left",
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
    },

})