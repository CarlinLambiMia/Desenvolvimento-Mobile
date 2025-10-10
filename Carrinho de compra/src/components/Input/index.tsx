import { View, TextInput, TextInputProps, StyleProp, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  placeH: string;
  style?: StyleProp<ViewStyle>;
};

export function Input({ placeH, onChangeText, value, keyboardType, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeH}
        placeholderTextColor="#888C81"
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
}
