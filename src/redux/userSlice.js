import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        id: window.localStorage.getItem("userID"),
        user: {},
        role: "",
        isLoggedIn: false,
        jobCandidatures: [],
    },
    reducers: {
        setUser(state, actions) {
            state.user = actions.payload
            state.id = actions.payload._id
            state.role = actions.payload.role
            window.localStorage.setItem("userID", actions.payload._id)
        },
        setIsLoggedIn(state, actions) {
            state.isLoggedIn = actions.payload
        },
        setJobCandidatures(state, actions) {
            state.jobCandidatures = actions.payload
        },
    },
})

export const userActions = userSlice.actions
export default userSlice
