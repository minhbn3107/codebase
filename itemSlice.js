import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ITEM_URL = "https://6756a39111ce847c992d88e8.mockapi.io/shopping";

const initialState = {
    items: [],
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
    const response = await axios.get(ITEM_URL);
    return response.data;
});

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export const selectItems = (state) => state.items.items;

export default itemsSlice.reducer;
