import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Detail } from "../screens/Detail";
import { Home } from "../screens/Home";


const Stack = createNativeStackNavigator()


export const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home"  component={Home}></Stack.Screen>
                <Stack.Screen name="Detail" component={Detail}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}