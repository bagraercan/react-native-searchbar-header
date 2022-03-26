import { useState } from "react"
import { TouchableOpacity, View, Text,Button } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { SearchBar } from "../components/search-bar"

export const Home = ({navigation}) => {

    const [value, setValue] = useState("")

    const onSubmit = (value) => {
        console.log("hey" + value.nativeEvent.text);
    }

    return (
        <>
            <SearchBar headerTitle="Home" value={value} tintColor={"black"} onBack={() => navigation.goBack()} onSubmitEditing={onSubmit} titleAlign="flex-start" enableBackButton={false} onChangeText={(t) => setValue(t)} onClear={() => setValue("")}>
                <View style={{ paddingRight: 12 }}>
                    <TouchableOpacity>
                        <Ionicons name="information-circle" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingRight: 12 }}>
                    <TouchableOpacity>
                        <Ionicons name="md-options" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </SearchBar>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{marginBottom:16}}>Home</Text>
                <Button title="Go Detail" onPress={()=>navigation.navigate("Detail")}></Button>
            </View>
        </>
    )
}