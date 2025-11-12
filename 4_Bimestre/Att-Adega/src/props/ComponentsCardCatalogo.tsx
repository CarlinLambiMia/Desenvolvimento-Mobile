import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../Theme/Theme";

type props = { 
    title: string,
    text: string,
    image?: unknown,
}

export function CatalogoCardPage(props: props) { 
    return (
        <View style={styles.containerCard}>
            <View style={styles.cards}>
                <Text style={styles.imageCard}>{props.image}</Text>
                <View style={styles.alingText}>
                    <Text style={styles.titleCard}>{props.title}</Text>
                    <Text style={styles.subTitle}>{props.text}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: { 
        marginTop: 16,
        alignItems: 'center',

    },
    cards: { 
        padding: 10,
        width: "95%",
        borderRadius: 12,        
        flexDirection: 'row',
        backgroundColor: theme.colors.secundary,
    },
    titleCard: { 
        fontWeight: 600,
        marginBottom: 20,
        color: theme.colors.active,
        fontSize: theme.fonts.sizes.subTitle,
    },
    textCard: { 
        
    },
    imageCard: { 
        width: 35,
        height: 150,
        marginLeft: 20
    },
    alingText: { 
        flexShrink: 1,
        marginLeft: 20,

    },
    subTitle: { 
        lineHeight: 22,
        color: theme.colors.active,
    }
});