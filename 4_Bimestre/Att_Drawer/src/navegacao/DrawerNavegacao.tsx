import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import TelaInicio from '../telas/TelaInicio';
import TelaDesenvolvimentoMobile from '../telas/TelaDesenvolvimentoMobile';
import TelaRedesComputadores from '../telas/TelaRedesComputadores';
import TelaMatematica from '../telas/TelaMatematica';
import TelaPortugues from '../telas/TelaPortugues';

const Drawer = createDrawerNavigator();

export default function DrawerNavegacao() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: '#2c3e50' },
        drawerLabelStyle: { color: '#fff', fontSize: 16, marginLeft: -10 },
        headerStyle: { backgroundColor: '#3498db' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#1abc9c',
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={TelaInicio}
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ color }: { color: string }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          title: 'Início',
        }}
      />
      <Drawer.Screen
        name="DesenvolvimentoMobile"
        component={TelaDesenvolvimentoMobile}
        options={{
          drawerLabel: 'Desenv. Mobile',
          drawerIcon: ({ color }: { color: string }) => (
            <Ionicons name="phone-portrait" size={24} color={color} />
          ),
          title: 'Desenv. Mobile',
        }}
      />
      <Drawer.Screen
        name="RedesComputadores"
        component={TelaRedesComputadores}
        options={{
          drawerLabel: 'Redes',
          drawerIcon: ({ color }: { color: string }) => (
            <Ionicons name="git-network" size={24} color={color} />
          ),
          title: 'Redes de Computadores',
        }}
      />
      <Drawer.Screen
        name="Matematica"
        component={TelaMatematica}
        options={{
          drawerLabel: 'Matemática',
          drawerIcon: ({ color }: { color: string }) => (
            <Ionicons name="calculator" size={24} color={color} />
          ),
          title: 'Matemática',
        }}
      />
      <Drawer.Screen
        name="Portugues"
        component={TelaPortugues}
        options={{
          drawerLabel: 'Português',
          drawerIcon: ({ color }: { color: string }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
          title: 'Português',
        }}
      />
    </Drawer.Navigator>
  );
}