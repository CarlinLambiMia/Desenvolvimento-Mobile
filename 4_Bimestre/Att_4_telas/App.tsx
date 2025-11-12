import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/TelaInicio';
import AddExpenseScreen from './src/components/TelaAdicionarDespesa';
import ListExpensesScreen from './src/components/TelaListaDespesas';
import SummaryScreen from './src/components/TelaResumo';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  AddExpense: { refresh?: boolean };
  ListExpenses: undefined;
  Summary: undefined;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Minhas Despesas' }} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Nova Despesa' }} />
        <Stack.Screen name="ListExpenses" component={ListExpensesScreen} options={{ title: 'Lista de Despesas' }} />
        <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: 'Resumo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}