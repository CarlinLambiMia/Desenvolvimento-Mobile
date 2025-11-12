import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { theme } from '../Theme/Theme';

import { HomePage } from '../screens/Home';
import { CatalogoPage } from '../screens/Catalogo';
import { ContatoPage } from '../screens/Contatos';

const Tabs = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tabs.Navigator
        screenOptions={{
                headerTitleAlign: 'center',
                tabBarLabelStyle: styles.tabLabel,
                headerTintColor: theme.colors.active,
                tabBarActiveTintColor: theme.colors.active,
                tabBarInactiveTintColor: theme.colors.secundary,
                tabBarActiveBackgroundColor: theme.colors.primary,
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
            }}
        >
            <Tabs.Screen
                name="Início"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Catálogo"
                component={CatalogoPage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="wine-bottle" size={22} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="Contato"
                component={ContatoPage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="address-book" size={22} color={color} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}

const styles = StyleSheet.create({
    tabLabel: {
        fontSize: 12,
        fontWeight: '800',
    }
});
