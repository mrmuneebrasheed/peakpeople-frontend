import React, { useState, useEffect } from "react"
import BlueBanner from "../components/BlueBanner"
import { useParams } from "react-router-dom"
import peakLogo from "../assets/img/logo.png"
import "../assets/css/JobPage.css"
import api from "../redux/api"
import moment from "moment"

export default function JobPage() {
    const params = useParams()
    const jobID = params.jobId
    const [job, setJob] = useState({})
    const [modalMessage, setModalMessage] = useState("Loading...")
    useEffect(() => {
        api.get("/jobs/job-by-id/" + jobID)
            .then((res) => setJob(res.data.job))
            .catch((err) => console.log(err))
    }, [jobID])
    const startingDate = moment(job.startingDate).format("DD/MM/YYYY")
    return (
        <React.Fragment>
            <BlueBanner />
            {job.title ? (
                <div className="job-page">
                    <div className="header flex-row">
                        <div className="logo">
                            <img
                                src={job.logo || peakLogo}
                                alt="Peak Logo"
                                className="logo-image"
                            />
                        </div>
                        <div className="flex-column">
                            <h1 className="title">{job.title}</h1>
                            <div className="job-credentials flex-row blue">
                                <i className="bi bi-geo-alt-fill icon "></i>
                                <span>{`${
                                    job.enterprise
                                } • ${job.contractType?.toUpperCase()} • Date de Début: ${startingDate} • ${
                                    job.location
                                }`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="information flex-row">
                        <div className="flex-column col-1">
                            <div className="brief bg-white border-rounded card">
                                <h2 className="blue">L'offre en bref</h2>
                                <div className="grey">{`Expérience > ${job.experienceRequired}`}</div>
                                <div className="grey">{`Rémuneration : ${
                                    job.remuneration || "Sélon profil"
                                }`}</div>
                                <div className="pink-button">
                                    Postuler à cettre offre
                                </div>
                            </div>
                            <div className="skills bg-white border-rounded">
                                <h2 className="blue">Compétences requises</h2>
                                <div className="skills-list">
                                    {job.skillsRequired.map((skill) => (
                                        <span className="skill-box">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="job-information col-2 bg-white border-rounded">
                            <h2 className="blue">À propose de nous</h2>
                            <p className="light-font">
                                {job.enterpriseDescription}
                            </p>
                            <h2 className="blue">Descriptif du poste</h2>
                            <p className="light-font">{job.jobDescription}</p>
                            <h2 className="blue">Tes Mission</h2>
                            <p className="light-font">{job.missions}</p>
                            <h2 className="blue">Profil recherché</h2>
                            <p className="light-font">{job.profileRequired}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="modal">
                    <div className="modal-message blue">{modalMessage}</div>
                </div>
            )}
        </React.Fragment>
    )
}
