import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Controle de Despesas</Text>

      <View style={styles.button}>
        <Button
          title="Adicionar Despesa"
          onPress={() => navigation.navigate('AddExpense', { refresh: true })}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Ver Lista"
          onPress={() => navigation.navigate('ListExpenses')}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Ver Resumo"
          onPress={() => navigation.navigate('Summary')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 40 },
  button: { marginVertical: 10 },
});