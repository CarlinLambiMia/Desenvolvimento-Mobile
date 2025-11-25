import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 5,
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Themes.colors.button_color,
        borderRadius: 10,
        width: "100%",
        height: 45,
    },

    textButton: {
        color: "white",
        fontWeight: 600,
        fontSize: Themes.fonts.size.destc,
    }
});
