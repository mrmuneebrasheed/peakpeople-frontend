import React from "react"
import "./Alerts.css"

export default function Alerts() {
    const alerts = [
        {
            title: "Titre d'alerte",
            lastSend: new Date(),
            numberOfSend: 4,
            wayOfSend: ["SMS", "Email"],
        },
    ]
    return (
        <div className="alerts-page">
            <h2 className="blue">Alertes</h2>
            <div className="bg-white border-rounded flex-column">
                <div className="flex-row justify-evenly">
                    <h4 className="title">Titre</h4>
                    <h4>Dernier envoie</h4>
                    <h4>Nombre d'envoie</h4>
                    <h4>Diffusé par</h4>
                    <h4 className="scoring text-center">Scoring</h4>
                    <h4>Actions</h4>
                </div>
                <div className="alerts flex-column">
                    {alerts.map((alert) => (
                        <div key={Math.random()} className="alert-box flex-row">
                            <input
                                className="check-box"
                                type="checkbox"
                                name="alert"
                                id="alert"
                            />
                            <span className="title light-font">
                                {alert.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
