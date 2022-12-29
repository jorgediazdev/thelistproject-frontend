import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
import authReducer from "./features/authSlice";
import apiReducer from "./features/apiSlice";

const store = configureStore({
    reducer: {
        items: itemsReducer,
        auth: authReducer,
        api: apiReducer
    },
});

export default store;
