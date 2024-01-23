import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./reducers/example.reducer";

const store = configureStore({
    reducer: {
        exampleSlice,
    },
});

export default store;
