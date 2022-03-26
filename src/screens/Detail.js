import { useState } from "react"
import { TouchableOpacity, View, Text } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SearchBar } from "../components/search-bar"


export const Detail = ({ navigation }) => {

    const [value, setValue] = useState("")

    const onSubmit = (value) => {
        console.log("hey" + value.nativeEvent.text);
    }

    return (
        <>
            <SearchBar
                headerTitle="Detail"
                value={value}
                tintColor={"blue"}
                onBack={() => navigation.goBack()}
                onSubmitEditing={onSubmit}
                titleAlign="center"
                enableBackButton={true}
                onChangeText={(t) => setValue(t)}
                onClear={() => setValue("")}
            >
                <View style={{ paddingRight: 12 }}>
                    <TouchableOpacity>
                        <Ionicons name="information-circle" size={24} color="blue" />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingRight: 12 }}>
                    <TouchableOpacity>
                        <Ionicons name="md-options" size={24} color="blue" />
                    </TouchableOpacity>
                </View>
            </SearchBar>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Detail</Text>
            </View>
        </>
    )
}