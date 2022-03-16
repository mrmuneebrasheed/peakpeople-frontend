import React from "react"

import FormationsDashboard from "../components/FormationsDashboard"
import ProfileCard from "../components/ProfileCard"
import CandidaturesDashboard from "../components/CandidaturesDashboard"
import ActivePostesDashboard from "../components/ActivePostesDashboard"
import Calender from "../components/Calender"

import "./CandidateDashboard.css"

export default function Dashboard(props) {
    return (
        <div className="candidate-dashboard">
            <div className="flex-row">
                <ProfileCard />
                <Calender />
            </div>
            <div className="flex-row justify-between">
                <FormationsDashboard />
                <CandidaturesDashboard />
                <ActivePostesDashboard />
            </div>
        </div>
    )
}
