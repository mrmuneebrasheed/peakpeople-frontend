import React from "react"
import FormationsDashboard from "./FormationsDashboard"
import ProfileCard from "./ProfileCard"
import CandidaturesDashboard from "./CandidaturesDashboard"
import "../assets/css/CandidateDashboard.css"
import ActivePostesDashboard from "./ActivePostesDashboard"

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
