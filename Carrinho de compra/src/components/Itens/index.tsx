import { View, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./styles";

type Props = {
  chave: number;
  name: string;
  onDelete: (chave: number) => void;
};

export function Itens({ chave, name, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <Entypo name="check" size={24} color="black" />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
