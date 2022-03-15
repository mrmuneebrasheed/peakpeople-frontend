import React from "react"
import CandidatureCard from "./CandidatureCard"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "./CandidaturesDashboard.css"

export default function CandidaturesDashboard() {
    const jobCandidatures = useSelector(
        (state) => state.userStore.jobCandidatures
    )
    console.log(jobCandidatures)
    const navigate = useNavigate()
    const navigateToCandidatures = () => {
        navigate("/candidate/candidatures")
    }
    const jobsToDisplay = jobCandidatures?.filter((job, index) => index < 3)
    console.log(jobsToDisplay)
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
            {jobsToDisplay ? (
                <div>
                    {jobsToDisplay?.map((job) => (
                        <CandidatureCard
                            key={job._id}
                            id={job.job._id}
                            title={job.job.title}
                            enterprise={job.job.enterprise}
                            date={job.job.date}
                            status={job.status}
                            small={true}
                        />
                    ))}
                </div>
            ) : (
                <div>No jobs</div>
            )}
        </div>
    )
}
