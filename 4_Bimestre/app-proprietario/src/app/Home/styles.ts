import { StyleSheet } from 'react-native';
import { Themes } from '../../../theme/themes';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: Themes.colors.siste,
    },

    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute"
    },

    main: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "auto",
        marginBottom: "auto",
    },

    text: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingRight: 20,
        paddingLeft: 20,
        gap: 15,
    },

    titul: {
        fontSize: Themes.fonts.size.title_dest,
        textAlign: "center",
        fontWeight: 'bold',
        color: Themes.colors.siste,
    },

    descri: {
        fontSize: Themes.fonts.size.subtitul,
        textAlign: "center",
        color: Themes.colors.siste,
    }

});