import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5000";

const initialState = {
    friends: [],
    isLoading: false,
    isError: false,
    errorMessage: ""
};

export const getFriends = createAsyncThunk("api/getFriends", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${baseURL}/api/user/friends`, {
            headers: {
                "Authorization": `Bearer ${thunkAPI.getState().auth.user.token}`
            }
        });
        return response.data;
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
    }
});

const apiSlice = createSlice({
    name: "api",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = "";
            state.friends = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFriends.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFriends.fulfilled, (state, action) => {
                state.isLoading = false;
                state.friends = action.payload;
            })
            .addCase(getFriends.rejected, (state) => {
                state.isLoading = false;
            })
    }
});

export default apiSlice.reducer;
export const { reset } = apiSlice.actions;