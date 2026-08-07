import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface FilterButtonProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

export default function FilterButton({
  title,
  active,
  onPress,
}: FilterButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        active && styles.activeButton
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E5E7EB",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },

  activeButton: {
    backgroundColor: "#2563EB",
  },

  text: {
    color: "#111827",
    fontWeight: "600",
  },

  activeText: {
    color: "#FFFFFF",
  },
});