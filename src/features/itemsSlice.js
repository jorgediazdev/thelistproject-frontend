import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    isLoading: false,
    isError: false,
    errorMessage: ""
};

export const getItems = createAsyncThunk("items/getItems", async (itemsOwnerId, thunkAPI) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/item?itemsOwnerId=${itemsOwnerId}`, {
            headers: {
                "Authorization": `Bearer ${thunkAPI.getState().auth.user.token}`
            }
        });

        return response.data;
    } catch (error) {
        const message = error.response.data || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
});

export const createItem = createAsyncThunk("items/postItem", async (item, thunkAPI) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/item`, item, {
            headers: {
                "Authorization": `Bearer ${thunkAPI.getState().auth.user.token}`
            }
        });

        return response.data;
    } catch (error) {
        const message = error.response.data || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
});

export const deleteItem = createAsyncThunk("items/deleteItem", async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/item/${id}`, {
            headers: {
                "Authorization": `Bearer ${thunkAPI.getState().auth.user.token}`
            }
        });

        return response.data;
    } catch (error) {
        const message = error.response.data || error.message || error.toString();

        return thunkAPI.rejectWithValue(message);
    }
});

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.errorMessage = "";
        },
        clearItems: (state) => {
            state.items = [];
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getItems.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getItems.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload)
                state.items = action.payload === null ? [] : action.payload;
            })
            .addCase(getItems.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
            })
            .addCase(createItem.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload.item);
            })
            .addCase(createItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
                console.log(action.payload)
            })
            .addCase(deleteItem.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = state.items.filter((item) => item._id != action.payload.deletedItem._id);
                // console.log(action.payload)
            })
            .addCase(deleteItem.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
                console.log(action.payload)
            })
    }
});

export const { reset, clearItems } = itemsSlice.actions;
export default itemsSlice.reducer;