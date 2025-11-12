import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { theme } from "../Theme/Theme";

export function HomePage() { 
    return (
        <ImageBackground
            source={require('../Image/background.webp')}
            style={styles.imageBackground}
            blurRadius={3}
        >
            <View style={styles.textContainer}>
                <Text style={styles.title}>Adega Preferida</Text>
                <Text style={styles.text}>Aqui voce encontra os melhores e mais sabores de vinhos.</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: { 
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: { 
        width: '80%',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: theme.colors.active,
        fontSize: theme.fonts.sizes.titlePageHome,
    },
    text: { 
        textAlign: 'center',
        color: theme.colors.active,
        fontSize: theme.fonts.sizes.textWine,
    },
})