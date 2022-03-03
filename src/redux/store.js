import { createStore } from "redux"

const loginReducer = (state = { id: "" }, action) => {
    switch (action.type) {
        case "login": {
            console.log(action.email, action.password)
            return { id: action.id }
        }
        case "logout":
            return { id: "" }
        default:
            return state
    }
}

const loginStore = createStore(loginReducer)
const store = { loginStore }
export default store
