import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import moment from "moment"
import Modal from "react-modal/lib/components/Modal"
import "./Alerts.css"

export default function Alerts() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [selectAlert, setSelectAlert] = useState({})
    const alerts = [
        {
            title: "Titre d'alerte",
            lastSend: moment(),
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quo doloribus cum voluptatem enim asperiores provident soluta velit recusandae amet unde, ea, temporibus ut iusto sit, quia illum dolorum earum?",
            numberOfSend: 4,
            wayOfSend: ["SMS", "Email"],
            scoring: 4,
            visible: true,
        },
        {
            title: "Titre d'alerte",
            lastSend: moment(),
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quo doloribus cum voluptatem enim asperiores provident soluta velit recusandae amet unde, ea, temporibus ut iusto sit, quia illum dolorum earum?",
            numberOfSend: 4,
            wayOfSend: ["SMS", "Email"],
            scoring: 4,
            visible: true,
        },
        {
            title: "Titre d'alerte",
            lastSend: moment(),
            numberOfSend: 4,
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quo doloribus cum voluptatem enim asperiores provident soluta velit recusandae amet unde, ea, temporibus ut iusto sit, quia illum dolorum earum?",
            wayOfSend: ["SMS", "Email"],
            scoring: 4,
            visible: true,
        },
    ]
    const customStyles = {
        content: {
            height: "40vh",
            width: "30vw",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            animation: "fade-in-linear 600ms ease-in-out",
        },
    }
    return (
        <div className="alerts-page">
            <div className="flex-row justify-between">
                <h2 className="blue">Alertes</h2>
                <div
                    onClick={() =>
                        navigate("/manager/analytics/alerts/create-new")
                    }
                    className="pink-button"
                >
                    + Nouvelle Alerte
                </div>
            </div>

            <div className="bg-white border-rounded flex-column">
                <div className="flex-row justify-evenly">
                    <h4 className="title text-center pink">Titre</h4>
                    <h4 className="title text-center pink">Type d'alerte</h4>
                    <h4 className="last-send pink">Dernier envoie</h4>
                    <h4 className="number-of-send pink">Nombre d'envoie</h4>
                    <h4 className="ways-of-send pink">Diffusé par</h4>
                    <h4 className="scoring text-center pink">Scoring</h4>
                    <h4 className="actions text-center pink">Actions</h4>
                </div>
                <div className="alerts flex-column">
                    {alerts.map((alert) => (
                        <div
                            onClick={() => {
                                setShowModal(true)
                                setSelectAlert(alert)
                            }}
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
                            <span className="alert-type">Type d'alerte</span>

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
            <Modal
                isOpen={showModal}
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setShowModal(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className="text-center blue">Détails d'une alerte</h3>
                <h3 className="blue text-center">{selectAlert.title}</h3>
                <div className="flex-row justify-between">
                    <h4 className="blue">
                        {`Dérnier envoie: ${selectAlert?.lastSend?.format(
                            "DD/MM/YYYY"
                        )} • Nombre d'envoie: ${selectAlert.numberOfSend}`}
                    </h4>
                </div>
                <div className="description light-font">
                    Description:&nbsp;{selectAlert.description}
                </div>
                <button
                    className="pink-button"
                    onClick={() => setShowModal(false)}
                >
                    close
                </button>
            </Modal>
        </div>
    )
}
