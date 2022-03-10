import { useEffect } from "react"
import Login from "./pages/Login"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import CandidateDashboard from "./pages/CandidateDashboard"
import Candidate from "./pages/Candidate"
import Entreprise from "./components/Entreprise"
import Jobs from "./pages/Jobs"
import Candidatures from "./pages/Candidatures"
import JobPage from "./pages/JobPage"
import { useSelector, useDispatch } from "react-redux"
import { jobActions } from "./redux/jobSlice"
import { userActions } from "./redux/userSlice"

import api from "./redux/api"

function App() {
    const dispatch = useDispatch()
    const { id, isLoggedIn } = useSelector((state) => state.userStore)
    console.log(id)
    useEffect(() => {
        api.get("/user/find-by-id/" + id)
        api.get("/jobs/all-jobs")
            .then((res) => {
                dispatch(jobActions.setJobs(res.data.jobs))
            })
            .catch((err) => console.log(err))
        api.get("/user/get-candidatures/" + id)
            .then((res) => {
                console.log(res.data)
                dispatch(userActions.setJobCandidatures(res.data.candidatures))
            })
            .catch((err) => console.log(err))
    }, [isLoggedIn])

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="candidate" element={<Candidate />}>
                        <Route path="home" element={<CandidateDashboard />} />
                        <Route path="enterprise" element={<Entreprise />} />
                        <Route path="jobs" element={<Jobs />}></Route>
                        <Route path="candidatures" element={<Candidatures />} />
                        <Route path="job/:jobId" element={<JobPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
