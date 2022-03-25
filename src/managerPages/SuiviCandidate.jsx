import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import api from "../redux/api"
import logo from "../assets/img/logo.png"
import "./SuiviCandidate.css"

export default function SuiviCandidate() {
    const managerID = useSelector((state) => state.userStore.id)
    const [candidatures, setCandidatures] = useState([])
    useEffect(() => {
        api.get("/candidatures/get-candidatures-by-manager/" + managerID)
            .then((res) => setCandidatures(res.data.candidatures))
            .catch((err) => console.log(err.message))
    }, [])

    return (
        <div className="suivi-candidate-page flex-column">
            <h2 className="blue">Suivi des Candidats</h2>
            <div className="candidatures">
                {candidatures[0] ? (
                    candidatures.map((candidature) => (
                        <div className="candidature flex-row">
                            <input type="checkbox" />
                            <div className="logo flex-column justify-center bg-white border-rounded">
                                <img src={logo} alt="logo" className="image" />
                            </div>
                            <div className="credentials flex-column bg-white border-rounded">
                                <div className="job-title pink">
                                    {`Job: ${candidature.job.title}`}
                                </div>
                                <div className="candidate-name blue">{`Candidat: ${candidature.candidate.firstName} ${candidature.candidate.lastName}`}</div>
                                <div className="">{`${candidature.job.contractType} - ${candidature.job.location}`}</div>
                                <div className="">{`Statut: ${candidature.status}`}</div>
                                <div className="">{`Ètape: ${candidature.step}`}</div>
                                <button className="pink-button">Détails</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No Candidature</div>
                )}
            </div>
            <h2 className="blue">Retours</h2>
            <textarea
                className="retour-input"
                cols="30"
                rows="10"
                placeholder="Retours"
            ></textarea>
            <button className="pink-button">Envoyer</button>
        </div>
    )
}
