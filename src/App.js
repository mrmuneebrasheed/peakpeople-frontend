import Login from "./pages/Login"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import CandidateDashboard from "./components/CandidateDashboard"

import Candidate from "./pages/Candidate"
import Entreprise from "./components/Entreprise"
// import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="candidate" element={<Candidate />}>
                        <Route path="home" element={<CandidateDashboard />} />
                        <Route path="entreprise" element={<Entreprise />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
