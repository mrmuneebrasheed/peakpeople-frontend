import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import JobCard from "../components/JobCard"
import "./Recruitments.css"

export default function Recruitements() {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const jobs = useSelector((state) => state.jobStore.jobs)
    const [jobsToDisplay, setJobsToDisplay] = useState(jobs)

    useEffect(() => {
        setJobsToDisplay(
            jobs.filter(
                (job) =>
                    job.title.toLowerCase().includes(search.toLowerCase()) ||
                    job.skillsRequired.some((skill) =>
                        skill.title.toLowerCase().includes(search.toLowerCase())
                    )
            )
        )
    }, [search])

    return (
        <div className="recruitments-page">
            <div className="flex-row justify-between">
                <h2 className="blue">Recrutements en Cours</h2>
                <span
                    onClick={() => navigate("/manager/recruitment/new-job")}
                    className="pink-button"
                >
                    + Nouveau
                </span>
            </div>
            <div className="flex-row justify-center">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    className="search"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Rechercher un poste, une compétence..."
                />
            </div>
            <div className="candidatures">
                {jobsToDisplay ? (
                    jobsToDisplay.map((job) => (
                        <JobCard
                            key={job._id}
                            id={job._id}
                            title={job.title}
                            enterprise={job.enterprise}
                            dateCreated={job.dateCreated}
                            location={job.location}
                            contractType={job.contractType}
                            candidates={job.candidatures.length}
                            navigateLink={"/manager/recruitment/details/"}
                            manager={true}
                        />
                    ))
                ) : (
                    <div>No Jobs</div>
                )}
            </div>
        </div>
    )
}
