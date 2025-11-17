import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { expenses, Expense } from './TelaAdicionarDespesa';

type Props = NativeStackScreenProps<RootStackParamList, 'ListExpenses'>;

export default function ListExpensesScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {expenses.length === 0 ? (
        <Text style={styles.empty}>Nenhuma despesa cadastrada</Text>
      ) : (
        <FlatList
          data={expenses}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.amount}>R$ {item.amount.toFixed(2)}</Text>
            </View>
          )}
        />
      )}

      <View style={styles.button}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  empty: { textAlign: 'center', marginTop: 50, fontSize: 18, color: 'gray' },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#eee' },
  description: { fontSize: 16, fontWeight: '500' },
  amount: { fontSize: 16, color: 'red', fontWeight: 'bold' },
  button: { marginTop: 20 },
});