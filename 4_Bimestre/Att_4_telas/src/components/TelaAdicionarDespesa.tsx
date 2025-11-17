import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export interface Expense {
  id: string;
  description: string;
  amount: number;
}

export const expenses: Expense[] = [];

type Props = NativeStackScreenProps<RootStackParamList, 'AddExpense'>;

export default function AddExpenseScreen({ navigation }: Props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAdd = () => {
    if (!description.trim()) {
      Alert.alert('Erro', 'Descrição é obrigatória');
      return;
    }
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      Alert.alert('Erro', 'Valor deve ser um número positivo');
      return;
    }

    expenses.push({
      id: Date.now().toString(),
      description,
      amount: value,
    });

    Alert.alert('Sucesso', 'Despesa adicionada!');
    setDescription('');
    setAmount('');
    navigation.navigate('ListExpenses');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Ex: Almoço" />

      <Text style={styles.label}>Valor (R$)</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        placeholder="Ex: 25.90"
        keyboardType="numeric"
      />

      <View style={styles.buttons}>
        <Button title="Salvar" onPress={handleAdd} />
        <View style={{ width: 10 }} />
        <Button title="Cancelar" color="gray" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginTop: 15, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8 },
  buttons: { flexDirection: 'row', justifyContent: 'center', marginTop: 30 },
});