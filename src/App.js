//importing modules
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//importing Pages
import Login from "./components/Login"
import Signup from "./components/Signup"

// Candidate Pages
import Candidate from "./candidatePages/Candidate"
import CandidateDashboard from "./candidatePages/CandidateDashboard"
import Entreprise from "./components/Entreprise"
import Jobs from "./candidatePages/Jobs"
import Candidatures from "./candidatePages/Candidatures"
import JobPage from "./candidatePages/JobPage"

// Manager Pages
import Manager from "./managerPages/Manager"
import ManagerDashboard from "./managerPages/ManagerDashboard"
import Objectives from "./managerPages/Objectives"
import Alerts from "./managerPages/Alerts"
import CreateAlert from "./managerPages/CreateAlert"
import Recruitements from "./managerPages/Recruitments"
import AnalyticsDashboard from "./managerPages/AnalyticsDashboard"
import ManagerJobPage from "./managerPages/ManagerJobPage"
import CreateJob from "./managerPages/CreateJob"
import RecruitmentDetailsPage from "./managerPages/RecruitmentDetailsPage"
import CandidatureDetailsPage from "./managerPages/CandidatureDetailsPage"
import SuiviCandidate from "./managerPages/SuiviCandidate"
import Onboarding from "./managerPages/Onboarding"
import Tests from "./managerPages/Tests"
import CreateTest from "./managerPages/CreateTest"
import CreateOnboarding from "./managerPages/CreateOnboarding"
import TalentMapping from "./managerPages/TalentMapping"
import Talents from "./managerPages/Talents"
import TeamMapping from "./managerPages/TeamMapping"

// Redux imports
import { userActions } from "./redux/userSlice"
import { uiActions } from "./redux/uiSlice"
import { jobActions } from "./redux/jobSlice"
import { useSelector, useDispatch } from "react-redux"

// Components Import
import BackButton from "./components/BackButton"

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
    useEffect(() => {
        api.get("/connection/find-by-id/" + id)
            .then((res) => {
                dispatch(userActions.setUser(res.data.user))
                // If the user is candidate then api calls
                if (res.data.user.role === "candidate") {
                    api.get("/candidatures/get-candidatures-by-user/" + id)
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
                    api.get("/jobs/all-jobs")
                        .then((res) => {
                            dispatch(jobActions.setJobs(res.data.jobs))
                        })
                        .catch((err) => console.log(err))
                }
                if (res.data.user.role === "manager")
                    api.get("/manager/jobs/" + id).then((res) => {
                        dispatch(jobActions.setJobs(res.data.jobs))
                    })
            })
            .catch((err) =>
                dispatch(uiActions.setModalMessage(err.response.message))
            )
    }, [isLoggedIn])

    return (
        <Router>
            <div className="App">
                {<BackButton />}
                <Routes>
                    {/* // Connection Pages Routes */}
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Candidate Module Routes*/}
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

                    {/* Manager Module Routes */}
                    <Route path="manager" element={<Manager />}>
                        <Route path="home" element={<ManagerDashboard />} />
                        <Route
                            path="analytics/dashboard"
                            element={<AnalyticsDashboard />}
                        />
                        <Route
                            path="analytics/objectives"
                            element={<Objectives />}
                        />
                        <Route path="analytics/alerts" element={<Alerts />} />
                        <Route
                            path="analytics/alerts/create-new"
                            element={<CreateAlert />}
                        />
                        {/* <Route
                            path="recruitment/to-be-done"
                            element={<Recruitements />}
                        /> */}
                        <Route
                            path="recruitment/in-process"
                            element={<Recruitements />}
                        />
                        <Route
                            path="recruitment/job/:jobID"
                            element={<ManagerJobPage />}
                        />
                        <Route
                            path="recruitment/new-job"
                            element={<CreateJob />}
                        />
                        <Route
                            path="recruitment/details/:jobID"
                            element={<RecruitmentDetailsPage />}
                        />
                        <Route
                            path="recruitment/candidature/:candidatureID"
                            element={<CandidatureDetailsPage />}
                        />
                        <Route
                            path="recruitment/suivi"
                            element={<SuiviCandidate />}
                        />
                        <Route
                            path="recruitment/onboarding"
                            element={<Onboarding />}
                        />
                        <Route
                            path="recruitment/onboarding/create"
                            element={<CreateOnboarding />}
                        />
                        <Route path="recruitment/tests" element={<Tests />} />
                        <Route
                            path="recruitment/tests/new"
                            element={<CreateTest />}
                        />
                        <Route
                            path="management/talents-map"
                            element={<TalentMapping />}
                        ></Route>
                        <Route
                            path="management/talents-map/:talent"
                            element={<Talents />}
                        />
                        <Route
                            path="management/team/:projectID"
                            element={<TeamMapping />}
                        />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App
