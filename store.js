import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        items: itemReducer,
        cart: cartReducer,
    },
});
