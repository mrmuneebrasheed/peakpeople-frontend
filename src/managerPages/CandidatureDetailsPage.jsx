import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import api from "../redux/api"
import logo from "../assets/img/logo.png"
import { questionnaireLeadership } from "../redux/tests"
import "./CandidatureDetailsPage.css"
import { capitalizeWord } from "../redux/useableFunctions"

export default function CandidatureDetailsPage() {
    const params = useParams()
    const candidatureID = params.candidatureID
    const [candidature, setCandidature] = useState({})
    const [showTests, setShowTests] = useState(false)
    useEffect(() => {
        api.get("/candidatures/get-by-ID/" + candidatureID).then((res) => {
            // console.log(res.data)
            setCandidature(res.data.candidature)
        })
    }, [])

    return (
        <div className="candidature-details-page">
            {candidature.job ? (
                <div>
                    <div className="flex-row header">
                        <div className="title pink">
                            {candidature.job.title}
                        </div>
                        <div className="links flex-row justify-evenly">
                            <span className="link blue bg-white border-rounded">
                                Modifier offre
                            </span>
                            <span className="link blue bg-white border-rounded">
                                Supprimer offre
                            </span>
                        </div>
                    </div>
                    <div className="section flex-row justify-between">
                        <div className="profile bg-white border-rounded flex-row">
                            <div className="logo flex-column">
                                <img
                                    className="logo-image"
                                    src={logo}
                                    alt="logo"
                                />
                            </div>
                            <div className="credentials flex-column">
                                <h3 className="blue name">
                                    {`${candidature.candidate.firstName} ${candidature.candidate.lastName}`}
                                </h3>
                                <span>{candidature.candidate.email}</span>
                                <span>
                                    {candidature.candidate.contactNumber}
                                </span>
                                <p>{"à postuler par: interne"}</p>
                            </div>
                        </div>
                        <div className="buttons flex-column">
                            <input type="file" name="test" id="test" hidden />
                            <button className="pink-button">
                                ENVOYER UN TEST &nbsp; &#9660;
                            </button>
                            <button className="pink-button">
                                REFUSER LE CANDIDAT
                            </button>
                        </div>
                    </div>
                    <div className="steps flex-row align-center justify-evenly bg-white border-rounded">
                        <div className="step">
                            <span className="heading">Recrutement étape:</span>
                            <span className="step-name">{`${capitalizeWord(
                                candidature.step
                            )}`}</span>
                        </div>
                        <div className="step">
                            <span className="heading">Statut:</span>
                            <span className="step-name">{`${capitalizeWord(
                                candidature.status
                            )}`}</span>
                        </div>
                        <div className="step">
                            <span className="heading">Taux de Process:</span>
                            <span className="step-name">{`${"Unknown"}`}</span>
                        </div>
                        <div className="step">
                            <span className="heading">Taux de Matching:</span>
                            <span className="step-name">{`${"Unknown"}`}</span>
                        </div>
                        <div className="step">
                            <span className="heading">
                                Numéro en Shortlist:
                            </span>
                            <span className="step-name">{`${"Unknown"}`}</span>
                        </div>
                    </div>
                    <div className="section documents bg-white border-rounded">
                        <div className="flex-row justify-between">
                            <h3 className="blue">
                                Documents à envoyer - Non visible par le
                                candidat
                            </h3>
                            <span className="pink-button">+</span>
                        </div>
                        <div className="documents-list border-rounded">
                            <ul>
                                {candidature.documents?.map((document) => (
                                    <li>{document}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="section comments flex-column bg-white border-rounded">
                        <div className="flex-row justify-between">
                            <h3 className="blue">
                                {`Commentaires (Échangé) - Non visible par le candidat`}
                            </h3>
                        </div>
                        <div className="comments-list border-rounded">
                            {candidature.comments &&
                                candidature.comments.map((comment) => (
                                    <div className="comment">
                                        {comment.body}
                                    </div>
                                ))}
                        </div>
                        <input
                            type="text"
                            className="form-input comment-input"
                            placeholder="Ajouter un Commentaire"
                        />
                        <button className="pink-button">Ajouter</button>
                    </div>
                </div>
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}
