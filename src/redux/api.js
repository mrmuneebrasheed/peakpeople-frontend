import axios from "axios"
import moment from "moment"
const api = axios.create({
    baseURL:
        process.env.NODE_ENV === "development"
            ? "http://localhost:9000"
            : "https://peakpeople.herokuapp.com/",
})

export default api
