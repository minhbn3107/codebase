import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    decreaseQuantity,
    increaseQuantity,
    removeAll,
    selectCart,
} from "../cartSlice";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Cart() {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        if (cart) setCartItems(cart);
    }, [cart]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text>My Basket</Text>
            {cartItems &&
                cartItems.map((item) => (
                    <View key={item.id} style={{ flexDirection: "row" }}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={{ uri: item.imgurl }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text>${item.price}</Text>
                            <Text>{item.name}</Text>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <FontAwesome
                                    name="star"
                                    size={10}
                                    color="yellow"
                                />
                                <FontAwesome
                                    name="star"
                                    size={10}
                                    color="yellow"
                                />
                                <FontAwesome
                                    name="star"
                                    size={10}
                                    color="yellow"
                                />
                                <FontAwesome
                                    name="star"
                                    size={10}
                                    color="yellow"
                                />
                                <FontAwesome
                                    name="star"
                                    size={10}
                                    color="yellow"
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() =>
                                    dispatch(decreaseQuantity(item.id))
                                }
                            >
                                <AntDesign
                                    name="minuscircleo"
                                    size={24}
                                    color="green"
                                />
                            </TouchableOpacity>
                            <Text>{item.quantity}</Text>
                            <TouchableOpacity
                                onPress={() =>
                                    dispatch(increaseQuantity(item.id))
                                }
                            >
                                <AntDesign
                                    name="pluscircle"
                                    size={24}
                                    color="green"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            <View
                style={{
                    position: "absolute",
                    bottom: 0,
                    flexDirection: "row",
                }}
            >
                <Text>Total:</Text>
                <Text>
                    $
                    {cartItems.reduce(
                        (prev, curr) => prev + curr.price * curr.quantity,
                        0
                    )}
                </Text>
                <TouchableOpacity onPress={() => dispatch(removeAll())}>
                    <Text>Payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
