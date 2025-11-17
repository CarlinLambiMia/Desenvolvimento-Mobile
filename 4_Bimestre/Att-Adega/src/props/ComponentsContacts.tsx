import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../Theme/Theme";

type props = { 
    text: string,
    title: string,
    icon?: unknown,
}

export function ContactsCard(props: props) { 
    return (
        <View style={styles.containerCard}>
            <View style={styles.Card}>
                <Text>{props.icon}</Text>
                <Text style={styles.titleCard}>{props.title}</Text>
                <Text style={styles.textCard}>{props.text}</Text>
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: { 
        alignItems: 'center',
        paddingTop: 10
    },
    Card: { 
        padding: 22,
        width: '70%',
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        borderColor: theme.colors.contactsBorderColor,
    },
    titleCard: { 
        fontWeight: 'bold',
        color: theme.colors.primary,
        fontSize: theme.fonts.sizes.contactsTitle,
    },
    textCard: { 
        color: theme.colors.primary,
        fontSize: theme.fonts.sizes.text,
        fontWeight: 400,
        marginTop: 6
    }
})