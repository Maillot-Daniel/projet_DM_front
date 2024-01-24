import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import routeReducer from "./reducers/route.reducer";

const store = configureStore({
    reducer: {
        userState: userReducer,
        routeState: routeReducer,
    },
});

export default store;
