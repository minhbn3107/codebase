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
import { fetchItems, selectItems } from "../itemSlice";
import { useEffect, useState } from "react";
import { addItem } from "../cartSlice";

export default function List() {
    const items = useSelector(selectItems);
    const dispatch = useDispatch();
    const [listItems, setListItems] = useState([]);
    const [selectedType, setSelectedType] = useState("Vegetable");
    const [limit, setLimit] = useState(3);
    const types = ["Vegetable", "Seafood", "Drinks"];

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    useEffect(() => {
        if (items) {
            limit === 3
                ? setListItems(
                      items
                          .filter((item) => item.type === selectedType)
                          .slice(0, limit)
                  )
                : setListItems(
                      items.filter((item) => item.type === selectedType)
                  );
        }
    }, [items, selectedType, limit]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextInput
                placeholder="Search"
                style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    marginHorizontal: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                }}
            />

            <View style={{ flexDirection: "row", gap: 10 }}>
                {types.map((type, index) => (
                    <TouchableOpacity
                        style={{
                            width: 100,
                            height: 20,
                            backgroundColor:
                                type === selectedType ? "green" : "",
                            borderRadius: 20,
                            borderColor: "black",
                            borderWidth: 1,
                            marginTop: 20,
                        }}
                        onPress={() => setSelectedType(type)}
                        key={index}
                    >
                        <Text
                            style={{
                                color: type === selectedType ? "white" : "blue",
                                textAlign: "center",
                            }}
                        >
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    marginTop: 10,
                }}
            >
                <Text
                    style={{
                        color: "green",
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: 500,
                    }}
                >
                    Order Your Favorite
                </Text>
                <TouchableOpacity onPress={() => setLimit(0)}>
                    <Text
                        style={{
                            color: "orange",
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: 500,
                        }}
                    >
                        See All
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        gap: 40,
                        paddingHorizontal: 30,
                    }}
                >
                    {listItems.map((item) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={{ backgroundColor: "#fff" }}
                                onPress={() => dispatch(addItem(item))}
                            >
                                <Image
                                    style={{ width: 150, height: 150 }}
                                    source={{ uri: item.imgurl }}
                                />
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
