import { StyleSheet } from 'react-native';
import { Themes } from '../../../../theme/themes';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        width: "100%",
        alignItems: "flex-start",
        flexDirection: "column",
        borderBottomWidth: 1,
        borderBottomColor: Themes.colors.button_color,
        paddingTop: 10,
        paddingBottom: 10,
        gap: 10,
    },

    textItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 5,
    },

    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#232326",
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

})