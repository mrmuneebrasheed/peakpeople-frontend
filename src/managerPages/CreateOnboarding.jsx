import React, { useState } from "react"
import api from "../redux/api"
import "./CreateOnboarding.css"

export default function CreateOnboarding() {
    const [intitule, setIntitule] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [stepsAndBody, setStepsAndBody] = useState([])
    return (
        <div className="create-onboarding">
            <h2 className="blue">Onboarding Parcours</h2>
            <div className="onboarding-form flex-column bg-white border-rounded">
                <input
                    onChange={(e) => setIntitule(e.target.value)}
                    type="text"
                    className="form-input"
                    placeholder="Intitule de Parcours"
                />
                <h3 className="pink">Ajouter des étapes</h3>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    className="form-input"
                    placeholder="Titre d'étape"
                />
                <textarea
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    className="form-input"
                    cols="30"
                    rows="8"
                    placeholder="Contenu d'étape"
                ></textarea>
                <button
                    onClick={() =>
                        setStepsAndBody((initial) => [
                            ...initial,
                            { title, body },
                        ])
                    }
                    className="pink-button"
                >
                    Ajouter
                </button>
                <div className="steps">
                    {stepsAndBody?.map((step, index) => (
                        <div key={index} className="step">
                            <h3>{`${index + 1}: ${step.title}`}</h3>
                            <p>{`${step.body}`}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
