import React from "react"
import "../assets/css/Candidatures.css"
import JobCard from "../components/JobCard"
import { useSelector } from "react-redux"
import CandidatureCard from "../components/CandidatureCard"

export default function Candidatures() {
    const jobCandidatures = useSelector(
        (state) => state.userStore.jobCandidatures
    )
    return (
        <div className="candidatures-page">
            <div className="header flex-row justify-between">
                <span className="title">{`Mes candidatures(${jobCandidatures?.length})`}</span>
                <select className="filter-option" name="" id="">
                    <option value="">Tier par</option>
                </select>
            </div>
            {jobCandidatures ? (
                <div>
                    {jobCandidatures?.map((job) => (
                        <CandidatureCard
                            key={Math.random()}
                            title={job?.title}
                            entreprise={job?.entreprise}
                            date={job?.date}
                            status={job?.status}
                            small={false}
                        />
                    ))}
                </div>
            ) : (
                <div>No Candidatures</div>
            )}
        </div>
    )
}
