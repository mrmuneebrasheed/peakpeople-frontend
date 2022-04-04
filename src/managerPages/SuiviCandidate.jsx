import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import { useSelector } from "react-redux"
import api from "../redux/api"
import { capitalizeWord } from "../redux/useableFunctions"
import "./SuiviCandidate.css"

export default function SuiviCandidate() {
    const [sector, setSector] = useState("all")
    const managerID = useSelector((state) => state.userStore.id)
    const [candidatures, setCandidatures] = useState([])
    const [candidaturesToShow, setCandidaturesToShow] = useState([])
    const [refresh, setRefresh] = useState(true)

    // Modal States
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    const [candidature, setCandidature] = useState({})
    const [changed, setChanged] = useState({})

    useEffect(() => {
        api.get("/candidatures/get-candidatures-by-manager/" + managerID)
            .then((res) => {
                setCandidatures(res.data.candidatures)
                setCandidaturesToShow(res.data.candidatures)
            })
            .catch((err) => console.log(err.message))
    }, [refresh])
    useEffect(() => {
        const filteredCandidatures = candidatures.filter(
            (candidature) => candidature.job.sector === sector
        )
        if (sector === "all") setCandidaturesToShow(candidatures)
        if (sector !== "all") setCandidaturesToShow(filteredCandidatures)
    }, [sector])

    const customStyles = {
        content: {
            height: "60vh",
            width: "30vw",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            animation: "fade-in-linear 600ms ease-in-out",
            borderRadius: "15px",
        },
    }
    const handleModifyRecruitment = () => {
        api.put(
            "/candidatures/modify-one-Candidature/" + candidature._id,
            changed
        ).then((res) => console.log(res))
        setShowDetailsModal(false)
        setRefresh((initial) => !initial)
    }
    return (
        <div className="suivi-candidate-page flex-column">
            <h2 className="blue">Suivi des Candidats</h2>
            <div className="section fex-column justify-center align-center">
                <label className="label pink" htmlFor="job-sector">
                    Département de Recrutement
                </label>
                <select
                    onChange={(e) => setSector(e.target.value)}
                    value={sector}
                    className="sector-input"
                    required
                    id="browsers"
                >
                    <option value="all">Département de Recrutement</option>
                    <option value="informatique/telecom">
                        Informatique / Télécom
                    </option>
                    <option value="commerce/distributon">
                        Commerce / Distribution
                    </option>
                    <option value="banque/assurance">
                        Banque / Assurances
                    </option>
                    <option value="edition/communication/multimedia">
                        Edition / Communication / Multimedia
                    </option>
                    <option value="électronique/électricité">
                        Electronique / Electricité
                    </option>
                </select>
            </div>
            <div className="candidatures bg-white border-rounded">
                <div className="flex-row justify-between">
                    <span className="box title pink text-center">Initials</span>
                    <span className="box title pink text-center">Prénom</span>
                    <span className="box title pink text-center">Nom</span>
                    <span className="box title pink text-center">Position</span>
                    <span className="box title pink text-center">
                        Entreprise
                    </span>
                    <span className="box title pink text-center">Location</span>

                    <span className="box title pink text-center">
                        Phone number
                    </span>
                    <span className="box title pink text-center">Email</span>
                    <span className="box title pink text-center">Statut</span>
                    <span className="box title pink text-center">Etape</span>
                    <span className="box title pink text-center">
                        Short List N°
                    </span>
                    <span className="box title pink text-center">Modifier</span>
                </div>
                {candidaturesToShow[0] ? (
                    candidaturesToShow.map((candidature) => (
                        <div
                            key={candidature._id}
                            className="candidature flex-row justify-between align-center"
                        >
                            <span className="box text-center ">
                                {candidature.candidate.firstName[0] +
                                    candidature.candidate.lastName[0]}
                            </span>
                            <span className="box text-center">
                                {candidature.candidate.firstName}
                            </span>
                            <span className="box text-center">
                                {candidature.candidate.lastName}
                            </span>
                            <span className="box text-center">
                                {candidature.job.title}
                            </span>
                            <span className="box text-center">
                                {candidature.job.enterprise}
                            </span>
                            <span className="box text-center">
                                {candidature.job.location}
                            </span>
                            <span className="box text-center">
                                {candidature.candidate.contactNumber}
                            </span>
                            <span className="box text-center">
                                {candidature.candidate.email}
                            </span>
                            <span className="box text-center">
                                {candidature.status}
                            </span>
                            <span className="box text-center">
                                {candidature.step}
                            </span>
                            <span className="box text-center">
                                {candidature.shortListNumber}
                            </span>
                            <span className="box text-center">
                                <button
                                    className="pink-button"
                                    onClick={() => {
                                        setCandidature(candidature)
                                        setShowDetailsModal(true)
                                    }}
                                >
                                    Modifier
                                </button>
                            </span>
                        </div>
                    ))
                ) : (
                    <div>No Candidature</div>
                )}
            </div>
            {/* <h2 className="blue">Retours</h2>
            <textarea
                className="retour-input"
                cols="30"
                rows="10"
                placeholder="Retours"
            ></textarea> */}
            {/* <button className="pink-button">Envoyer</button> */}
            <Modal
                style={customStyles}
                isOpen={showDetailsModal}
                onRequestClose={() => setShowDetailsModal(false)}
            >
                {candidature.candidate && (
                    <div className="details-modal flex-column">
                        <span
                            className="close-button"
                            onClick={() => setShowDetailsModal(false)}
                        >
                            X
                        </span>
                        <h3 className="pink">Job: {candidature?.job?.title}</h3>
                        <b className="blue">{`Candidat: ${
                            candidature.candidate.firstName
                        } ${candidature.candidate.lastName.toUpperCase()}`}</b>
                        <span>Entreprise: {candidature.job.enterprise}</span>
                        <div className="section flex-row justify-evenly align-center">
                            <label htmlFor="status" className="pink">
                                Statut
                            </label>
                            <select
                                onChange={(e) => {
                                    setChanged((initial) =>
                                        Object.assign(initial, {
                                            status: e.target.value,
                                        })
                                    )
                                }}
                                className="form-input"
                                name="status"
                                id="status"
                            >
                                <option value="en attente">En attente</option>
                                <option value="accepté">Acceptée</option>
                                <option value="rejeté">Rejetée</option>
                            </select>
                            <label htmlFor="step" className="pink">
                                Etape
                            </label>
                            <select
                                onChange={(e) => {
                                    setChanged((initial) =>
                                        Object.assign(initial, {
                                            step: e.target.value,
                                        })
                                    )
                                }}
                                className="form-input"
                                name="step"
                                id="step"
                            >
                                {candidature.job.recruitmentProcess.map(
                                    (step) => (
                                        <option value={step.step}>
                                            {capitalizeWord(step.step)}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                        <div className="flex-row align-center">
                            <label
                                htmlFor="short-list"
                                className="short-list pink"
                            >
                                Short List N°
                            </label>
                            <input
                                onChange={(e) => {
                                    setChanged((initial) =>
                                        Object.assign(initial, {
                                            shortListNumber: e.target.value,
                                        })
                                    )
                                }}
                                className="form-input"
                                type="number"
                                name="short-list"
                                id="short-list"
                                placeholder="Numéro"
                            />
                        </div>
                        <button
                            onClick={handleModifyRecruitment}
                            className="pink-button"
                        >
                            Saveguarder
                        </button>
                    </div>
                )}
            </Modal>
        </div>
    )
}
