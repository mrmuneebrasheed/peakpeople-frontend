import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import api from "../redux/api"
import FormationCard from "../components/FormationCard"
import "./Learning.css"

export default function Learning() {
    const managerID = useSelector((state) => state.userStore.id)
    const [formations, setFormations] = useState([])
    useEffect(() => {
        api.get("/formations/get-by-manager/" + managerID).then((res) =>
            setFormations(res.data.formations)
        )
    }, [])
    return (
        <div className="learning-page">
            <div className="flex-row justify-between">
                <h2 className="blue">Learning/Formations</h2>
                <button className="pink-button">Nouvelle Formation +</button>
            </div>
            <div className="flex-row">
                <input
                    className="search"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Rechercher une formation"
                />
            </div>
            <div className="formations">
                {formations[0] ? (
                    formations.map((formation, index) => (
                        <FormationCard key={index} formation={formation} />
                    ))
                ) : (
                    <div>No Formations</div>
                )}
            </div>
        </div>
    )
}
