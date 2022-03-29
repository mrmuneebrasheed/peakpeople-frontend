import React, { useState } from "react"
import api from "../redux/api"
import "./CreateOnboarding.css"

export default function CreateOnboarding() {
    const [intitule, setIntitule] = useState("")
    const [title, setTitle] = useState("")
    const [sector, setSector] = useState("")
    const [body, setBody] = useState("")
    const [stepsAndBody, setStepsAndBody] = useState([])
    const [document, setDocument] = useState("")
    const [documentsToSend, setDocumentsToSend] = useState([])
    const addDocument = () => {
        setDocumentsToSend((initial) => [...initial, document])
        setDocument("")
    }
    return (
        <div className="create-onboarding">
            <h2 className="blue">Onboarding Parcours</h2>
            <div className="onboarding-form flex-column bg-white border-rounded">
                <input
                    onChange={(e) => setIntitule(e.target.value)}
                    value={intitule}
                    type="text"
                    className="form-input"
                    placeholder="Intitule de Parcours"
                />
                <h3 className="pink">Secteur de métier</h3>
                <select
                    onChange={(e) => setSector(e.target.value)}
                    value={sector}
                    className="sector-input form-input"
                    required
                    id="sector"
                >
                    <option disabled value="">
                        Secteur de métier
                    </option>
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
                <div className="section flex-column justify-between">
                    <h3 className="pink">Documents à envoyer</h3>
                    <div className="flex-row">
                        <input
                            onChange={(e) => setDocument(e.target.value)}
                            value={document}
                            type="text"
                            name=""
                            id="document"
                            className="form-input"
                            placeholder="Nom du document"
                        />
                        <button onClick={addDocument} className="pink-button">
                            Ajouter
                        </button>
                    </div>
                    <div className="flex-row documents">
                        {documentsToSend?.map((document, indextoDelete) => (
                            <>
                                <span key={document} className="skill-box">
                                    {document}
                                </span>
                                <span
                                    onClick={() =>
                                        setDocumentsToSend((initialState) =>
                                            initialState.filter(
                                                (document, index) =>
                                                    index !== indextoDelete
                                            )
                                        )
                                    }
                                    className="delete-button"
                                >
                                    x
                                </span>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className="buttons flex-row">
                <button className="pink-white-button">Supprimer</button>
                <button className="pink-button">Envoyer</button>
            </div>
        </div>
    )
}
