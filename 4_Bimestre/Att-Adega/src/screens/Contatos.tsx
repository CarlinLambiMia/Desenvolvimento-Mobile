import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ContactsCard } from "../props/ComponentsContacts";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../Theme/Theme";

export function ContatoPage() { 
    return (
        <ScrollView>

            <View>
                <Text style={styles.titleCardsContact}>Entre em contato conosco para comprar nossos produtos</Text>
                <ContactsCard icon={<FontAwesome name="phone" size={44} color={theme.colors.primary} />}
                    title="Telefone:"
                    text="+55 69 00000000"
                />
                <ContactsCard icon={<FontAwesome name="map-marker" size={44} color={theme.colors.primary} />}
                    title="Endereço:"
                    text="Av.123,222 - Rio de Janeiro RJ"
                />
                <ContactsCard icon={<MaterialIcons name="email" size={44} color={theme.colors.primary} />}
                    title="Email"
                    text="preferida@adega.com.br"
                />
                <ContactsCard icon={<FontAwesome name="instagram" size={44} color={theme.colors.primary} />}
                    title="Instagram:"
                    text="@adegapreferida"
                />
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    titleCardsContact: { 
        padding: 20,
        fontWeight: 'bold',
        fontSize: theme.fonts.sizes.contactsTitleCard,
    },
})