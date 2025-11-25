import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Themes.colors.siste,
        padding: 10,
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },

    contener_person: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        width: "100%",
    },

    contener_titul: {
        display: 'flex',
        alignItems: "flex-start",
        marginTop: 50,
        marginBottom: 20,
    },

    contener_input: {
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 20,
        width: "100%",
    },

    contener_list: {
        display: "flex",
        width: "100%",
        minHeight: "65%",
        maxHeight: "65%",
        justifyContent: "center",
        backgroundColor: Themes.colors.siste,
        boxShadow: "0 1px 3px #C2C4CC",
        borderColor: Themes.colors.border,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        gap: 12,
        padding:10,
        marginBottom: 20,
    },


    titul: {
        fontSize: Themes.fonts.size.title_dest,
        textAlign: "center",
        fontWeight: 'bold',
        color: Themes.colors.siste,
    },

    subtitul: {
        fontSize: Themes.fonts.size.title,
        textAlign: "center",
        fontWeight: 'bold',
        color: Themes.colors.dark,
    },

    descri: {
        fontSize: Themes.fonts.size.title,
        textAlign: "center",
        color: Themes.colors.siste,
    },

});