import React from "react"
import jobsStore from "../redux/jobsStore"
import "../assets/css/Jobs.css"
import JobCard from "../components/JobCard"

export default function Jobs() {
    // const { jobs } = jobsStore.getState()
    const jobs = [
        {
            title: "UX Designer",
            enterprise: "Peak People",
            location: "Paris",
            contractType: "CDI",
            logo: "",
            dateCreated: new Date(),
            candidates: [1, 2, 3],
        },
        {
            title: "Full Stack Developpeur",
            enterprise: "Peak People",
            location: "Paris",
            contractType: "CDI",
            logo: "",
            dateCreated: new Date(),
            candidates: [1, 2, 3, 4, 5],
        },
    ]
    return (
        <div className="jobs-page">
            <div className="header flex-row justify-between">
                <div className="title blue">{`Postes ouvert(${jobs.length})`}</div>
                <div className="filter-options flex-row">
                    <select
                        className="filter-option"
                        name="Filtrer par"
                        id="filter-button"
                    >
                        <option value="">Filtrer par</option>
                    </select>
                    <select
                        className="filter-option"
                        name="Filtrer par"
                        id="filter-button"
                    >
                        <optgroup>Filtrer Par</optgroup>
                        <option>Tier par</option>
                    </select>
                </div>
            </div>

            {jobs?.map((job) => (
                <JobCard
                    title={job.title}
                    enterprise={job.enterprise}
                    location={job.location}
                    logo={job.logo}
                    contractType={job.contractType}
                    dateCreated={job.dateCreated}
                    candidates={job.candidates.length}
                />
            ))}
        </div>
    )
}
