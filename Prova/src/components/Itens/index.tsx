import { View, Text, TouchableOpacity } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { styles } from "./styles";

type Props = {
  chave: number;
  name: string;
  onDelete: (chave: number) => void;
};

export function Itens({ chave, name, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onDelete(chave)}>
        <EvilIcons name="trash" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
