import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { capitalizeWord } from "../redux/useableFunctions"
import api from "../redux/api"
import "./Tests.css"

export default function Tests() {
    const id = useSelector((state) => state.userStore.id)
    const [tests, setTests] = useState([])
    const [testIndex, setTestIndex] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        api.get("/tests/get-all-tests/" + id).then((res) => {
            console.log(res.data)
            setTests(res.data.tests)
        })
    }, [])

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
                {tests.map((test, index) => (
                    <div key={index} className="test">
                        <li
                            onClick={() => {
                                setTestIndex(index)
                            }}
                            className="link"
                        >
                            {capitalizeWord(test.title)}
                        </li>
                        {testIndex === index && (
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
