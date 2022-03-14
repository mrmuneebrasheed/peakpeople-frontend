import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import FormationsDashboard from "../components/FormationsDashboard"
import ProfileCard from "../components/ProfileCard"
import CandidaturesDashboard from "../components/CandidaturesDashboard"
import ActivePostesDashboard from "../components/ActivePostesDashboard"
import { userActions } from "../redux/userSlice"
import { uiActions } from "../redux/uiSlice"
import { jobActions } from "../redux/jobSlice"
import api from "../redux/api"
import "../assets/css/CandidateDashboard.css"

export default function Dashboard(props) {
    return (
        <div className="candidate-dashboard">
            <div className="flex-row">
                <ProfileCard />
            </div>
            <div className="flex-row justify-between">
                <FormationsDashboard />
                <CandidaturesDashboard />
                <ActivePostesDashboard />
            </div>
        </div>
    )
}
