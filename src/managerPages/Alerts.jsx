import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import "./Alerts.css"

export default function Alerts() {
    const alerts = [
        {
            title: "Titre d'alerte",
            lastSend: moment(),
            numberOfSend: 4,
            wayOfSend: ["SMS", "Email"],
            scoring: 4,
            visible: true,
        },
        {
            title: "Titre d'alerte",
            lastSend: moment(),
            numberOfSend: 4,
            wayOfSend: ["SMS", "Email"],
            scoring: 4,
            visible: true,
        },
        {
            title: "Titre d'alerte",
            lastSend: moment(),
            numberOfSend: 4,
            wayOfSend: ["SMS", "Email"],
            scoring: 4,
            visible: true,
        },
    ]
    return (
        <div className="alerts-page">
            <div className="flex-row justify-between">
                <h2 className="blue">Alertes</h2>
                <Link
                    className="link pink-button"
                    to="/manager/analytics/alerts/create-new"
                >
                    + Nouvelle Alerte
                </Link>
            </div>

            <div className="bg-white border-rounded flex-column">
                <div className="flex-row justify-evenly">
                    <h4 className="title text-center pink">Titre</h4>
                    <h4 className="last-send pink">Dernier envoie</h4>
                    <h4 className="number-of-send pink">Nombre d'envoie</h4>
                    <h4 className="ways-of-send pink">Diffusé par</h4>
                    <h4 className="scoring text-center pink">Scoring</h4>
                    <h4 className="actions text-center pink">Actions</h4>
                </div>
                <div className="alerts flex-column">
                    {alerts.map((alert) => (
                        <div
                            key={Math.random()}
                            className="alert-box flex-row justify-between light-font"
                        >
                            <input
                                className="check-box"
                                type="checkbox"
                                name="alert"
                                id="alert"
                            />
                            <span className="title">{alert.title}</span>
                            <span className="last-send">
                                {alert.lastSend.format("DD/MM/YYYY")}
                            </span>
                            <span className="number-of-send">
                                {alert.numberOfSend}
                            </span>
                            <span className="ways-of-send">
                                {alert.wayOfSend.join(", ")}
                            </span>
                            <span className="scoring text-center">
                                {alert.scoring}
                            </span>
                            <span className="actions justifys-self-end">
                                <i className="bi bi-pencil-fill blue icon"></i>
                                <i className="bi bi-trash-fill pink icon"></i>
                                {alert.visible ? (
                                    <i className="bi bi-eye-fill icon"></i>
                                ) : (
                                    <i class="bi bi-eye-slash-fill icon"></i>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-row buttons">
                <div className="pink-white-button">Supprimer</div>
                <div className="pink-button">Envoyer</div>
            </div>
        </div>
    )
}
