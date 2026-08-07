import { Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 15,
    marginHorizontal: 16,
  },
});