import React from "react"
import "../assets/css/CandidaturesDashboard.css"
import CandidatureCard from "./CandidatureCard"

export default function CandidaturesDashboard() {
    const jobCandidatures = [
        {
            title: "Product Manager Senior",
            entreprise: "Peak People",
            date: new Date(),
            status: "refusée",
        },
        {
            title: "Full Stack Developer",
            entreprise: "Peak People",
            date: new Date(),
            status: "refusée",
        },
        {
            title: "Reponsable Marketing",
            entreprise: "Peak People",
            date: new Date(),
            status: "refusée",
        },
    ]
    return (
        <div className="candidatures">
            <div className="flex-row justify-between">
                <b>{`Mes Candidatures (${jobCandidatures?.length || 13})`}</b>
                <span className="pink link icon">Voir tout</span>
            </div>
            {jobCandidatures.map((job) => (
                <CandidatureCard
                    key={Math.random()}
                    title={job?.title}
                    entreprise={job?.entreprise}
                    date={job?.date}
                    status={job?.status}
                    small={true}
                />
            ))}
        </div>
    )
}
