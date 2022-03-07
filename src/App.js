import Login from "./pages/Login"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Dashboard from "./components/Dashboard"

import Candidate from "./pages/Candidate"
import ProfileCard from "./components/ProfileCard"
import Entreprise from "./components/Entreprise"

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="candidate" element={<Candidate />}>
                        <Route
                            path="home"
                            element={
                                <Dashboard>
                                    <ProfileCard />
                                </Dashboard>
                            }
                        />
                        <Route path="entreprise" element={<Entreprise />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
