import { View } from "react-native";
import FilterButton from "../components/FilterButton";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function Index() {
    return (
        <View>
            <Header />
            <SearchBar />
            <FilterButton />
        </View>
    );
}
