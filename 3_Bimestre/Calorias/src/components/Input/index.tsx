import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

type Props = TextInputProps & {
  placeH: string;
};

export function Input({ placeH, style, ...rest }: Props) {
  return (
    <TextInput
      placeholder={placeH}
      placeholderTextColor="#999"
      style={[styles.input, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    color: "#000",
  },
});
