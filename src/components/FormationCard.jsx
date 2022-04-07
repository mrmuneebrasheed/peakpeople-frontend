import React from "react"
import moment from "moment"
import "./FormationCard.css"

export default function FormationCard({ formation }) {
    const startDate = moment(formation.startDate).format("DD-MM-YYYY")
    const endDate = moment(formation.endDate).format("DD-MM-YYYY")
    return (
        <div className="formation-card bg-white border-rounded flex-column">
            <h3 className="pink">{formation.title}</h3>
            <div className="middle flex-row align-center justify-between">
                <h3 className="bold blue">{formation.enterprise}</h3>
                <div className="dates blue bold flex-row justify-between">
                    <span>Date de commencement: {startDate}</span>
                    <span>Date de Fin: {endDate}</span>
                </div>
                <button className="pink-button">Postuler</button>
            </div>
            <div className="skills-box">
                {formation.skillsTaught.map((skill, index) => (
                    <span key={index} className="skill">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
