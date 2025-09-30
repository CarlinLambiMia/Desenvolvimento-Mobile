import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Event } from '@/components/Event';



export default function App() {


  return (
    <View style={styles.cont}>
      <Text style={styles.compras}>Lista de compras</Text>
      <Event />
    </View>
  );
};

export const styles = StyleSheet.create({
  cont: { 
    flex: 1,
    backgroundColor: '#3a3c3bff',
    paddingTop: 50,
    alignItems: 'center',
  },

  compras: { 
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
});
