import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./authReducer";
import cloudPlatformSlice from "./cloudPlatform";

const reducers = {
    auth: AuthReducer.reducer,
    cloudPlatform: cloudPlatformSlice.reducer
}

const Store = configureStore({
    reducer: reducers,
})

export default Store;
export type RootState = ReturnType<typeof Store.getState>