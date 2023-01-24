import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = process.env.ENVIRONMENT === "production" ? "http://thelistproject.com/api" : "http://localhost:5000";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isError: false,
    errorMessage: ""
};

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
    try {
        const response = await axios.post(`${baseURL}/api/user`, data);
        return response.data;
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString();
        console.log(message)
        return thunkAPI.rejectWithValue(message);
    }
});

export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
    try {
        const response = await axios.post(`${baseURL}/api/user/register`, data);
        return response.data;
    } catch (error) {
        const message = error.response.data.message || error.message || error.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.errorMessage = "";
        },
        logout: (state) => {
            localStorage.removeItem("user");
            state.user = null;
        },
        setIsError: (state, action) => {
            state.isError = true;
            state.errorMessage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage = action.payload;
            })
    }
});

export default authSlice.reducer;
export const { reset, logout, setIsError } = authSlice.actions;