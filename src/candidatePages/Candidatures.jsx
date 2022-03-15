import React from "react"
import "./Candidatures.css"
import { useSelector } from "react-redux"
import CandidatureCard from "../components/CandidatureCard"

export default function Candidatures() {
    const jobCandidatures = useSelector((state) => state.jobStore.jobs)
    console.log(jobCandidatures)
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
                            key={job._id}
                            id={job.job._id}
                            title={job.job.title}
                            enterprise={job.job.enterprise}
                            date={job.job.date}
                            status={job.status}
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
