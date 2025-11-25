import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8,
    },

    input: {
        textAlign: 'left',
        fontWeight: "500",
        fontSize: 15,
        color: Themes.colors.dark,
        backgroundColor: Themes.colors.siste,
        boxShadow: "0 1px 3px #C2C4CC",
        paddingLeft: 10,
        borderRadius: 8,
        width: "100%",
        height: 50, 
    },

});
