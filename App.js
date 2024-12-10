import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./components/Home";
import List from "./components/List";
import Entypo from "@expo/vector-icons/Entypo";
import Cart from "./components/Cart";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Cart"
                        component={Cart}
                        options={{
                            title: "",
                        }}
                    />
                    <Stack.Screen
                        name="List"
                        component={List}
                        options={({ navigation }) => ({
                            title: "",
                            headerRight: () => (
                                <TouchableOpacity
                                    style={{ right: 10 }}
                                    onPress={() => navigation.navigate("Cart")}
                                >
                                    <Entypo
                                        name="shopping-cart"
                                        size={24}
                                        color="green"
                                    />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
