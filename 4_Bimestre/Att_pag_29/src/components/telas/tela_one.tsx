import { StyleSheet, Text, View } from 'react-native';

export default function telaDescricao() { 
    return (
    <View style={styles.cont}>
        <Text style={styles.text}>Tela Descrição</Text>
        <Text>Tela de descrição</Text>
    </View>

    );
};

export const styles = StyleSheet.create({
    cont: { 
      flex: 1,
      backgroundColor: '#f7f9fc',
      paddingTop: 50,
      alignItems: 'center',
    },
  
    text: { 
      fontSize: 32,
      color: '#0749f0',
      textAlign: 'center',
    },
  });
  