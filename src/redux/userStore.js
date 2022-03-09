import { createStore } from "redux"
import axios from "axios"

const api = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:9000"
            : "https://peakpeople.herokuapp.com",
})

const userReducer = (
    state = {
        id: "",
        user: {},
        api: api,
        jobCandidatures: [
            {
                title: "Product Manager Senior",
                entreprise: "Peak People",
                date: new Date(),
                status: "refusée",
            },
            {
                title: "Full Stack Developer",
                entreprise: "Peak People",
                date: new Date(),
                status: "refusée",
            },
            {
                title: "Reponsable Marketing",
                entreprise: "Peak People",
                date: new Date(),
                status: "refusée",
            },
        ],
    },
    action
) => {
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
export default createStore(userReducer)
