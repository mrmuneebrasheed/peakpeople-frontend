import React, { useState } from "react"
import { useSelector } from "react-redux"
import api from "../redux/api"
import "./CreateTest.css"

export default function CreateTest() {
    const id = useSelector((state) => state.userStore.id)
    const [title, setTitle] = useState("")
    const [question, setQuestion] = useState("")
    const [sector, setSector] = useState("")
    const [questions, setQuestions] = useState([])

    const addQuestion = () => {
        setQuestions((initial) => [...initial, question])
        setQuestion("")
    }
    const sendTest = () => {
        api.post("/tests/new", {
            title,
            questions,
            sector,
            createdBy: id,
        }).then((res) => console.log(res))
    }
    return (
        <div className="create-test-page">
            <h2 className="blue">Créer un Test</h2>
            <div className="test-form bg-white border-rounded flex-column">
                <label htmlFor="title" className="pink bold">
                    Titre de Test
                </label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="form-input"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Titre de Test"
                />
                <div className="flex-column">
                    <label className="label pink bold" htmlFor="job-sector">
                        Département de Recrutement
                    </label>
                    <select
                        onChange={(e) => setSector(e.target.value)}
                        value={sector}
                        className="sector-input form-input"
                        required
                        id="browsers"
                    >
                        <option disabled value="">
                            Département de Recrutement
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
                </div>
                <label htmlFor="question" className="pink bold">
                    Ajouter votre question
                </label>
                <textarea
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                    className="form-input"
                    type="text"
                    name="question"
                    id="question"
                    placeholder="Question"
                    rows="4"
                />
                <button onClick={addQuestion} className="pink-white-button">
                    Ajouter
                </button>
                <button onClick={sendTest} className="pink-button">
                    Ajouter le Test
                </button>
            </div>
            {questions[0] && (
                <div className="questions bg-white border-rounded">
                    <h2 className="pink">{title}</h2>
                    <h3 className="blue">Questions</h3>
                    {questions &&
                        questions.map((question, index) => (
                            <p key={index} className="question align-center">
                                <span className="index pink">
                                    {index + 1}:&nbsp;
                                </span>{" "}
                                {question}
                            </p>
                        ))}
                </div>
            )}
        </div>
    )
}
