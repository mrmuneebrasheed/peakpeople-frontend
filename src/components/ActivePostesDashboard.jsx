import React from "react"
import { PieChart, Pie } from "recharts"
import { useNavigate } from "react-router-dom"
import jobsStore from "../redux/jobsStore"
import "../assets/css/ActivePostesDashboard.css"

export default function ActivePostesDashboard() {
    const { jobs } = jobsStore.getState()
    const navigate = useNavigate()
    const posteToDisplay = jobs[0]
    const {
        title,
        enterprise,
        description,
        location,
        contractType,
        dateCreated,
    } = posteToDisplay
    const days = new Date().getDay() - dateCreated.getDay()
    const navigateToPostes = () => {
        navigate("/candidate/jobs")
    }
    return (
        <div className="active-postes">
            <div className="flex-row justify-between">
                <b>{`Postes ouvert (${jobs?.length || 20})`}</b>
                <span className="pink link icon" onClick={navigateToPostes}>
                    Voir tout
                </span>
            </div>
            <div className="bg-white border-rounded card flex-column post-card">
                <div className="flex-row justify-between align-center">
                    <div className="flex-column">
                        <h4 className="blue link">{title}</h4>
                        <div className="flex-row">
                            <i className="bi bi-geo-alt-fill blue icon"></i>
                            <span className="">{enterprise}</span>
                        </div>
                    </div>
                    <span className="grey">{`Publié il y a ${days ? days : 1} ${
                        days > 1 ? "jours" : "jour"
                    }`}</span>
                </div>
                <p>{description}</p>
                <span>{`${location} • ${contractType}`}</span>
                <div className="graph">
                    <PieChart width={100} height={100}>
                        <Pie></Pie>
                    </PieChart>
                </div>
                <div className="apply-section flex-row">
                    <h3 className="blue text-center link">&#10006; Passer</h3>
                    <h3 className="pink text-center link">&#10004; Postuler</h3>
                </div>
            </div>
        </div>
    )
}
