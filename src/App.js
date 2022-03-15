//importing modules
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//importing Pages
import Login from "./components/Login"
import Signup from "./components/Signup"
import Candidate from "./candidatePages/Candidate"
import CandidateDashboard from "./candidatePages/CandidateDashboard"
import Entreprise from "./components/Entreprise"
import Jobs from "./candidatePages/Jobs"
import Candidatures from "./candidatePages/Candidatures"
import JobPage from "./candidatePages/JobPage"
import Manager from "./managerPages/Manager"
import ManagerDashboard from "./managerPages/ManagerDashboard"

// Redux imports
import { userActions } from "./redux/userSlice"
import { uiActions } from "./redux/uiSlice"
import { jobActions } from "./redux/jobSlice"
import { useSelector, useDispatch } from "react-redux"

// importing global app css file
import "./App.css"

//importing useful functions
import api from "./redux/api"

function App() {
    const dispatch = useDispatch()
    const { jobs } = useSelector((state) => state.jobStore)
    const { id, isLoggedIn, role, jobCandidatures } = useSelector(
        (state) => state.userStore
    )
    console.log(id, role, jobCandidatures)
    useEffect(() => {
        api.get("/connection/find-by-id/" + id)
            .then((res) => {
                dispatch(userActions.setUser(res.data.user))
                // If the user is candidate then api calls
                if (res.data.user.role === "candidate")
                    api.get("/user/get-candidatures/" + id)
                        .then((res) => {
                            console.log(res.data)
                            dispatch(
                                userActions.setJobCandidatures(
                                    res.data.candidatures
                                )
                            )
                        })
                        .catch((err) =>
                            dispatch(
                                uiActions.setModalMessage(err.response.message)
                            )
                        )
            })
            .catch((err) =>
                dispatch(uiActions.setModalMessage(err.response.message))
            )

        api.get("/jobs/all-jobs")
            .then((res) => {
                dispatch(jobActions.setJobs(res.data.jobs))
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
                        <Route
                            path="candidature/:status/:jobId"
                            element={<JobPage />}
                        />
                    </Route>
                    <Route path="manager" element={<Manager />}>
                        <Route path="home" element={<ManagerDashboard />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
