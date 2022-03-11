import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import jobSlice from "./jobSlice"
import uiSlice from "./uiSlice"

const store = configureStore({
    reducer: {
        userStore: userSlice.reducer,
        jobStore: jobSlice.reducer,
        uiStore: uiSlice.reducer,
    },
})
export default store
