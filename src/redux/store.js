import { createStore } from "redux"
import axios from "axios"

const api = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:9000"
            : "https://peakpeoplebackend.herokuapp.com",
})

const userReducer = (state = { id: "", user: {}, api: api }, action) => {
    switch (action.type) {
        case "setUser": {
            window.localStorage.setItem("userID", action.user._id)
            return { user: action.user }
        }
        case "login": {
            return { id: action.id }
        }
        case "logout":
            return { id: "" }
        default:
            return state
    }
}
const userStore = createStore(userReducer)
const store = userStore
export default store
