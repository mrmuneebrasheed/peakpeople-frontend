import React, { useState, useEffect } from "react"
import CandidatureCard from "../components/CandidatureCard"
import api from "../redux/api"
import "./Recruitments.css"

export default function Recruitements() {
    const [candidatures, setCandidatures] = useState([])
    useEffect(() => {
        api.get("/jobs/all-jobs")
            .then((res) => setCandidatures(res.data.jobs))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="recruitments-page">
            <h2 className="blue">Recrutements à effectuer</h2>
            <div className="candidatures">
                {candidatures ? (
                    candidatures.map((job) => (
                        <CandidatureCard
                            key={job._id}
                            id={job._id}
                            title={job.title}
                            enterprise={job.enterprise}
                            date={job.dateCreated}
                            status={"en-attente"}
                            small={false}
                        />
                    ))
                ) : (
                    <div>No Jobs</div>
                )}
            </div>
        </div>
    )
}
