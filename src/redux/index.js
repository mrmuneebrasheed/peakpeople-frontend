import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import jobSlice from "./jobSlice"

const store = configureStore({
    reducer: { userStore: userSlice.reducer, jobStore: jobSlice.reducer },
})
export default store
