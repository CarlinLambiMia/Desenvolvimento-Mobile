import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { CatalogoCardPage } from "../props/ComponentsCardCatalogo";
import { theme } from "../Theme/Theme";

export function CatalogoPage() {
    return (
        <ScrollView >
            <View>
                <Text style={styles.title}>Nossos Vinhos</Text>
                <Text style={styles.subTitle}>Trabalhamos como o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
                </Text>
                <CatalogoCardPage title="Chatigny Chardonnay"
                    text="Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto."
                    image={<Image source={require('../Image/vinho-branco.jpg')}
                     style={{
                            height: 150
                        }}
                        resizeMode="contain" />}
                />
                <CatalogoCardPage title="Concha y Toro Exportacion"
                    text="Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos."
                    image={<Image source={require('../Image/vinho-rose.jpg')}
                        style={{
                            height: 150
                        }}
                        resizeMode="contain"
                    />
                    }
                />
                <CatalogoCardPage title="Portada Winemaker's"
                    text="Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas."
                    image={<Image source={require('../Image/vinho-seco.jpg')} 
                     style={{
                            height: 150
                        }}
                        resizeMode="contain"
                    />
                    }
                />
                <CatalogoCardPage title="Elvio Cogno Ravera Barolo"
                    text="Vinho estruturado, com sabor de cereja vermelha madura, framboesas, notas de tabaco e taninos aveludados."
                    image={<Image source={require('../Image/vinho-especial.jpg')}
                     style={{
                            height: 150
                        }}
                        resizeMode="contain"
                    />
                    }
                />
                <CatalogoCardPage title="Portada Winemaker's Tinto"
                    text="Vinho tinto encorpado, com sabor intenso e frutado, final levemente adocicado e coloração vermelho-rubi."
                    image={<Image source={require('../Image/vinho-tinto.jpg')}
                     style={{
                            height: 150
                        }}
                        resizeMode="contain"
                    />
                    }
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        paddingTop: 16,
        paddingLeft: 16,
        fontWeight: 700,
        fontSize: theme.fonts.sizes.titleWine,
    },
    subTitle: {
        paddingTop: 16,
        paddingLeft: 16,
        fontSize: theme.fonts.sizes.textWine
    },
})