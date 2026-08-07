import { TextInput, StyleSheet } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Rechercher un colis ou un véhicule..."
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },
});