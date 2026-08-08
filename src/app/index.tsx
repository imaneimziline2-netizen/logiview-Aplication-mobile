import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

import Header from "../components/Header";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import FilterButton from "../components/FilterButton";

import { parcels, vehicles } from "../data/data";

export default function Index() {
  const [expandedParcel, setExpandedParcel] = useState<number | null>(null);
  const [expandedVehicle, setExpandedVehicle] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"Tous" | "En transit" | "Livré">("Tous");


   const filteredParcels = parcels.filter((parcel) => {

  const matchesSearch =
    parcel.reference.toLowerCase().includes(search.toLowerCase()) ||
    parcel.destination.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    statusFilter === "Tous" ||
    parcel.status === statusFilter;

  return matchesSearch && matchesStatus;
});

    const filteredVehicles = vehicles.filter((vehicle) =>
      vehicle.registration.toLowerCase().includes(search.toLowerCase()) ||
      vehicle.type.toLowerCase().includes(search.toLowerCase())
    );


    

  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView>

        <SectionTitle title="📦 Colis en cours" />
        <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={styles.filters}
>

<FilterButton
  title="Tous"
  active={statusFilter === "Tous"}
  onPress={() => setStatusFilter("Tous")}
/>

<FilterButton
  title="En transit"
  active={statusFilter === "En transit"}
  onPress={() => setStatusFilter("En transit")}
/>

<FilterButton
  title="Livré"
  active={statusFilter === "Livré"}
  onPress={() => setStatusFilter("Livré")}
/>

</ScrollView>

        {filteredParcels.map((parcel) => (
          <Card
            key={parcel.id}
            item={parcel}
            expanded={expandedParcel === parcel.id}
            onPress={() =>
              setExpandedParcel(
                expandedParcel === parcel.id
                  ? null
                  : parcel.id
              )
            }
          />
        ))}


        <SectionTitle title="🚚 Véhicules disponibles" />

        {filteredVehicles.map((vehicle) => (
          <Card
            key={vehicle.id}
            item={vehicle}
            expanded={expandedVehicle === vehicle.id}
            onPress={() =>
              setExpandedVehicle(
                expandedVehicle === vehicle.id
                  ? null
                  : vehicle.id
              )
            }
          />
        ))}

      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  filters: {
  marginHorizontal: 16,
  marginBottom: 10,
},
});