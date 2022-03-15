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
            window.localStorage.setItem("userID", actions.payload._id)
            state.user = actions.payload
            state.id = actions.payload._id
            state.role = actions.payload.role
        },
        logout(state, actions) {
            window.localStorage.setItem("userID", "")
            state.user = {}
            state.role = ""
            state.isLoggedIn = false
            state.jobCandidatures = []
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
