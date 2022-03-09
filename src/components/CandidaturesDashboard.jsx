import React from "react"
import CandidatureCard from "./CandidatureCard"
import userStore from "../redux/userStore"
import { useNavigate } from "react-router-dom"
import "../assets/css/CandidaturesDashboard.css"

export default function CandidaturesDashboard() {
    const { jobCandidatures } = userStore.getState()
    const navigate = useNavigate()
    const navigateToCandidatures = () => {
        navigate("/candidate/candidatures")
    }
    const jobsToDisplay = [
        jobCandidatures[0],
        jobCandidatures[1],
        jobCandidatures[2],
    ]
    return (
        <div className="candidatures">
            <div className="flex-row justify-between">
                <b>{`Mes Candidatures (${jobCandidatures?.length || 13})`}</b>
                <span
                    className="pink link icon"
                    onClick={navigateToCandidatures}
                >
                    Voir tout
                </span>
            </div>
            {jobsToDisplay.map((job) => (
                <CandidatureCard
                    key={Math.random()}
                    title={job?.title}
                    entreprise={job?.entreprise}
                    date={job?.date}
                    status={job?.status}
                    small={true}
                />
            ))}
        </div>
    )
}
