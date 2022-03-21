import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import JobCard from "../components/JobCard"
import "./Recruitments.css"

export default function Recruitements() {
    const navigate = useNavigate()
    const jobs = useSelector((state) => state.jobStore.jobs)
    return (
        <div className="recruitments-page">
            <div className="flex-row justify-between">
                <h2 className="blue">Recrutements à effectuer</h2>
                <span
                    onClick={() => navigate("/manager/recruitment/new-job")}
                    className="pink-button"
                >
                    + Nouveau
                </span>
            </div>

            <div className="candidatures">
                {jobs ? (
                    jobs.map((job) => (
                        <JobCard
                            key={job._id}
                            id={job._id}
                            title={job.title}
                            enterprise={job.enterprise}
                            dateCreated={job.dateCreated}
                            location={job.location}
                            contractType={job.contractType}
                            candidates={job.candidates.length}
                            navigateLink={"/manager/recruitment/job/"}
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
