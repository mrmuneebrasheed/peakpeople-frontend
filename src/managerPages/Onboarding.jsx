import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import api from "../redux/api"
import "./Onboarding.css"

export default function Onboarding() {
    const navigate = useNavigate()
    const id = useSelector((state) => state.userStore.id)
    const [intitule, setIntitule] = useState("")
    const [parcours, setParcours] = useState([])
    const [selectedParcour, setSelectedParcour] = useState(null)
    useEffect(() => {
        api.get(`/onboarding/manager/${id}`)
            .then((res) => setParcours(res.data.parcours))
            .catch((err) => console.log(err))
    }, [intitule])

    return (
        <div className="onboarding-page flex-column">
            <div className="flex-row justify-between">
                <h2 className="blue">Parcours d'onboarding</h2>
                <button
                    onClick={() =>
                        navigate("/manager/recruitment/onboarding/create")
                    }
                    className="pink-button"
                >
                    Nouveau
                </button>
            </div>

            <div className="onboarding bg-white border-rounded">
                <input
                    onChange={(e) => setIntitule(e.target.value)}
                    value={intitule}
                    type="text"
                    placeholder="Intitulé de Onboarding"
                    className="form-input"
                />
                {parcours[0] ? (
                    <div className="parcours">
                        {parcours.map((parcour, index) => (
                            <div key={index} className="parcour flex-column ">
                                <h2
                                    onClick={() => {
                                        setSelectedParcour((initial) =>
                                            initial === null ? index : null
                                        )
                                    }}
                                    className="parcour-heading pink link"
                                >
                                    {parcour.intitule}
                                </h2>
                                {selectedParcour === index && (
                                    <div className="parcour-steps flex-column">
                                        <span
                                            onClick={() => {
                                                setSelectedParcour(null)
                                            }}
                                            className="close-button"
                                        >
                                            X
                                        </span>
                                        <h2 className="pink text-center">
                                            Onboarding Parcours
                                        </h2>
                                        {parcours[
                                            selectedParcour
                                        ].stepsAndBody?.map((step, index) => (
                                            <div className="step">
                                                <p className="text-center">
                                                    <span className="numbers pink">
                                                        {`${index + 1} `}
                                                    </span>

                                                    <span className="step-title blue">{`${step.title}`}</span>
                                                </p>
                                                <p className="step-body text-center">
                                                    {step.body}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Aucun Parcours</div>
                )}
            </div>
        </div>
    )
}
