import React from "react"
import FormationsDashboard from "./FormationsDashboard"
import ProfileCard from "./ProfileCard"
import CandidaturesDashboard from "./CandidaturesDashboard"
import "../assets/css/CandidateDashboard.css"

export default function Dashboard(props) {
    return (
        <div className="candidate-dashboard">
            <div className="flex-row">
                <ProfileCard />
            </div>
            <div className="flex-row">
                <FormationsDashboard />
                <CandidaturesDashboard />
            </div>
        </div>
    )
}
