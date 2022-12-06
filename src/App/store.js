import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userApi } from "./usersAPI";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})