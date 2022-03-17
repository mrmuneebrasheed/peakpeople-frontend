import React, { useState } from "react"
import Calender from "../components/Calender"
import "./Objectives.css"

export default function Objectives() {
    const [objectives, setObjectives] = useState("")
    return (
        <div className="objectives-page">
            <h2>Objectifs</h2>
            <textarea
                onChange={(e) => setObjectives(e.target.value)}
                className="objectives-input"
                placeholder="Objectifs"
                name="objectives"
                id="objectives"
                cols="170"
                rows="10"
            ></textarea>
            <Calender template="month" objective={true} />
            <span
                className="pink-button send-button"
                onClick={() => console.log(objectives)}
            >
                Envoyer
            </span>

            <h2>Suivi des Coaching</h2>
            <div className="coaching"></div>
        </div>
    )
}
