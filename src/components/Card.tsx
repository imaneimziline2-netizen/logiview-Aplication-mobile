import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Parcel, Vehicle } from "../types";

interface CardProps {
  item: Parcel | Vehicle;
  expanded: boolean;
  onPress: () => void;
}

export default function Card({
  item,
  expanded,
  onPress,
}: CardProps) {
  const isParcel = "reference" in item;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {isParcel ? (
        <>
          <Text style={styles.title}>{item.reference}</Text>

          <Text>📍 Destination : {item.destination}</Text>

          <Text
            style={[
              styles.status,
              item.status === "Livré"
                ? styles.green
                : styles.orange,
            ]}
          >
            {item.status}
          </Text>

          {expanded && (
            <>
              <Text>⚖️ Poids : {item.weight}</Text>
              <Text>📅 Expédition : {item.shippingDate}</Text>
            </>
          )}
        </>
      ) : (
        <>
          <Text style={styles.title}>{item.registration}</Text>

          <Text>🚚 Type : {item.type}</Text>

          <Text
            style={[
              styles.status,
              item.status === "Disponible"
                ? styles.green
                : styles.orange,
            ]}
          >
            {item.status}
          </Text>

          {expanded && (
            <>
              <Text>👨 Chauffeur : {item.driver}</Text>
              <Text>🛣 Kilométrage : {item.mileage}</Text>
            </>
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  status: {
    marginTop: 6,
    fontWeight: "bold",
  },

  green: {
    color: "green",
  },

  orange: {
    color: "orange",
  },
});