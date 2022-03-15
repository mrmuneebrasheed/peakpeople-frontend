import React, { useState, useEffect } from "react"
import { PieChart, Pie } from "recharts"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import moment from "moment"
import "./ActivePostesDashboard.css"

export default function ActivePostesDashboard() {
    const jobs = useSelector((state) => state.jobStore.jobs)
    const job = useSelector((state) => state.jobStore.jobs[0])
    const navigate = useNavigate()
    // const days = new Date().getDate() - job?.dateCreated?.getDate()
    const fromNow = moment(job?.dateCreated).fromNow()
    const fromNowArray = fromNow.split(" ")
    if (fromNowArray[0] === "an") fromNowArray[0] = "1"
    if (fromNowArray[0] === "a") fromNowArray[0] = "un"
    if (fromNowArray[1] === "months") fromNowArray[1] = "mois"
    if (fromNowArray[1] === "day") fromNowArray[1] = "jour"
    if (fromNowArray[1] === "hour") fromNowArray[1] = "heure"
    if (fromNowArray[1] === "hours") fromNowArray[1] = "heures"
    if (fromNowArray[1] === "days") fromNowArray[1] = "jours"
    if (fromNowArray[1] === "years") fromNowArray[1] = "année"
    const navigateToPostes = () => {
        navigate("/candidate/jobs")
    }
    return (
        <div className="active-postes">
            <div className="flex-row justify-between">
                <b>{`Postes ouvert (${jobs.length || 20})`}</b>
                <span className="pink link icon" onClick={navigateToPostes}>
                    Voir tout
                </span>
            </div>
            {job ? (
                <div className="bg-white border-rounded card flex-column post-card">
                    <div className="flex-row justify-between align-center">
                        <div className="flex-column">
                            <h4 className="blue link">{job?.title}</h4>
                            <div className="flex-row">
                                <i className="bi bi-geo-alt-fill blue icon"></i>
                                <span className="">{job?.enterprise}</span>
                            </div>
                        </div>
                        <span className="grey">{`Publié il y a ${fromNowArray[0]} ${fromNowArray[1]}`}</span>
                    </div>
                    <div className="job-description">
                        <p>{job?.missions}</p>
                    </div>

                    <span>{`${job?.location} • ${job?.contractType}`}</span>
                    <div className="graph">
                        <PieChart width={100} height={100}>
                            <Pie></Pie>
                        </PieChart>
                    </div>
                    <div className="apply-section flex-row">
                        <h3 className="blue text-center link">
                            &#10006; Passer
                        </h3>
                        <h3 className="pink text-center link">
                            &#10004; Postuler
                        </h3>
                    </div>
                </div>
            ) : (
                <div>No Job</div>
            )}
        </div>
    )
}
