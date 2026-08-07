import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LogiView</Text>

      <Text style={styles.subtitle}>
        Tableau de bord logistique mobile
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2563EB",
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    fontSize: 15,
    color: "#E5E7EB",
    marginTop: 5,
  },
});