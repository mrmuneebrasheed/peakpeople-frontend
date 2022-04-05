import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { capitalizeWord } from "../redux/useableFunctions"
import api from "../redux/api"
import "./Tests.css"

export default function Tests() {
    const managerId = useSelector((state) => state.userStore.id)
    const [category, setCategory] = useState(false)
    const testsCategories = useSelector(
        (state) => state.userStore.user.testsCategories
    )
    const [tests, setTests] = useState([])
    const [testsToShow, setTestsToShow] = useState([])
    const [testIndex, setTestIndex] = useState("")
    const [showTest, setShowTest] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        api.get("/tests/get-all-tests/" + managerId).then((res) => {
            console.log(res.data)
            setTests(res.data.tests)
            setTestsToShow(res.data.tests)
        })
    }, [])
    useEffect(() => {
        setTestsToShow(tests.filter((test) => test.category === category))
    }, [category])
    return (
        <div className="tests-page">
            <div className="flex-row align-center justify-between">
                <h2 className="blue">Tests Ajouté</h2>
                <button
                    className="pink-button"
                    onClick={() => navigate("/manager/recruitment/tests/new")}
                >
                    Nouveau +
                </button>
            </div>

            <div className="tests bg-white border-rounded">
                <h1 className="pink text-center">Tests</h1>
                <div className="flex-row justify-center align-center">
                    <label htmlFor="category" className="pink bold icon">
                        Filtrer par le catégorie
                    </label>
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        name="category"
                        id="category"
                        className="form-input"
                    >
                        <option disabled value="">
                            Selectionner le catégorie
                        </option>
                        {testsCategories.map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                {testsToShow.map((test, index) => (
                    <div key={index} className="test">
                        <li
                            onClick={() => {
                                setTestIndex(index)
                                setShowTest((initial) => !initial)
                            }}
                            className="link"
                        >
                            {capitalizeWord(test.title)}
                        </li>
                        {showTest && testIndex === index && (
                            <div className="questions">
                                {test.questions.map((question, index) => (
                                    <p className="question" key={index}>
                                        <span className="index pink">
                                            Question:{index + 1}&nbsp;
                                        </span>
                                        {"=>"}&nbsp;
                                        {question}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
