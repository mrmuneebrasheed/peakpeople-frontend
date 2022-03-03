import Login from "./pages/Login"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    console.log(process.env.NODE_ENV)
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
