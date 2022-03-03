import { createStore } from "redux"
import axios from "axios"

const api =
    process.env.NODE_ENV === "development"
        ? "http://localhost:9000"
        : "https://peakpeoplebackend.herokuapp.com"
const userReducer = (state = { id: "" }, action) => {
    switch (action.type) {
        case "login": {
            axios.post(`${api}/user/login`, {
                email: action.email,
                password: action.password,
            })
            return { id: action.id }
        }
        case "logout":
            return { id: "" }
        default:
            return state
    }
}
const userStore = createStore(userReducer)
const store = { userStore }
export default store
