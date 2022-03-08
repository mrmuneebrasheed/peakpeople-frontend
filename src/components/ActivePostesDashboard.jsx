import React from "react"
import "../assets/css/ActivePostesDashboard.css"

export default function ActivePostesDashboard() {
    const activePostes = []
    return (
        <div className="active-postes">
            <div className="flex-row justify-between">
                <b>{`Postes ouvert (${activePostes?.length || 20})`}</b>
                <span className="pink link icon">Voir tout</span>
            </div>
            <div className="bg-white border-rounded card"></div>
        </div>
    )
}
