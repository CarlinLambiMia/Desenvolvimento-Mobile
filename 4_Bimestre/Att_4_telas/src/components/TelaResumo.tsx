import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { expenses } from './TelaAdicionarDespesa'; 
type Props = NativeStackScreenProps<RootStackParamList, 'Summary'>;

export default function SummaryScreen({ navigation }: Props) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo Financeiro</Text>
      <Text style={styles.total}>Total gasto: R$ {total.toFixed(2)}</Text>
      <Text style={styles.count}>Despesas: {expenses.length}</Text>

      <View style={styles.button}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  total: { fontSize: 28, fontWeight: 'bold', color: 'red', marginBottom: 10 },
  count: { fontSize: 18, color: 'gray' },
  button: { marginTop: 40, width: '100%' },
});