import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: {
            reducer(state, action) {
                state.cart.push(action.payload);
            },
            prepare(item) {
                return {
                    payload: {
                        quantity: 1,
                        ...item,
                    },
                };
            },
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.cart.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const existingItem = state.cart.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity--;
            }
            if (existingItem.quantity === 0) {
                const newCart = state.cart.filter((item) => item.id !== id);
                state.cart = newCart;
            }
        },
        removeAll(state, action) {
            state = initialState;
        },
    },
});

export const selectCart = (state) => state.cart.cart;

export const { addItem, decreaseQuantity, increaseQuantity, removeAll } =
    cartSlice.actions;

export default cartSlice.reducer;
