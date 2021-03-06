import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CandidatureProfile from "../components/CandidatureProfile"
import api from "../redux/api"
import { capitalizeWord } from "../redux/useableFunctions"
import "./RecruitmentDetailsPage.css"

export default function RecruitmentDetailsPage() {
    const params = useParams()
    const jobID = params.jobID

    const [job, setJob] = useState({})

    useEffect(() => {
        api.get("/jobs/job-by-id/" + jobID)
            .then((res) => {
                console.log(res.data)
                setJob(res.data.job)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="recruitment-detail-page">
            {job ? (
                <div className="job-details">
                    <div className="flex-row header">
                        <div className="title pink">{job.title}</div>
                        <div className="links flex-row justify-evenly">
                            <span className="link">
                                Voir fiche de poste/annonce
                            </span>
                            <span className="link">Modifier offre</span>
                            <span className="link">Supprimer offre</span>
                        </div>
                    </div>
                    <div className="timeline flex-column header">
                        <div className="title">Timeline</div>
                        <div className="steps flex-row justify-between">
                            {job.recruitmentProcess?.map((step, index) => (
                                <span key={index} className="timeline-step">
                                    {step.step}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="follow-table flex-row justify-between">
                        <div className="column flex-column text-center">
                            <div className="title">{`${job?.candidatures?.length} Candidats`}</div>
                            {job?.candidatures?.map((candidature, index) => (
                                <CandidatureProfile
                                    key={index}
                                    date={candidature.date}
                                    candidate={candidature.candidate}
                                    navigateLink={
                                        "/manager/recruitment/candidature/"
                                    }
                                    candidatureID={candidature._id}
                                />
                            ))}
                        </div>
                        {job.recruitmentProcess?.map((step, index) => (
                            <div
                                key={index}
                                className="column flex-column text-center"
                            >
                                <div className="title">
                                    {capitalizeWord(step.step)}
                                </div>
                                {job?.candidatures
                                    ?.filter(
                                        (candidature) =>
                                            candidature.step === step.step
                                    )
                                    .map((candidature, index) => (
                                        <CandidatureProfile
                                            key={index}
                                            candidature={true}
                                            date={candidature.date}
                                            candidate={candidature.candidate}
                                            navigateLink={
                                                "/manager/recruitment/candidature/"
                                            }
                                            candidatureID={candidature._id}
                                        />
                                    ))}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="">Loading</div>
            )}
        </div>
    )
}
