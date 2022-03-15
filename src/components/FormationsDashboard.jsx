import React from "react"
import TitleCircle from "./TitleCircle"
import { useSelector } from "react-redux"
import "./FormationsDashboard.css"

export default function FormationsDashboard() {
    const formations = useSelector((state) => state.userStore.id)
    const formation = formations ? formations[0] : {}
    const participants = [{ firstName: "Clementine", lastName: "Tania" }]
    const days = formation?.date?.getDays() - new Date().getDate
    return (
        <div className="formation">
            <div className="flex-row justify-between">
                <b>{`Formations récommendées (${formations?.length || 3})`}</b>
                <span className="pink link icon">Voir tout</span>
            </div>

            <div className="formation-card flex-column bg-white border-rounded card">
                <h3 className="blue link ">
                    {formation?.title ||
                        "Mener une étude en utilisant les principes de la user centricy"}
                </h3>
                <div className="instructor">{`Animé par ${
                    formation?.instructor || "Neal Bramard"
                }`}</div>
                <div className="flex-row location py-2">
                    <div className="">
                        <i className="bi bi-geo-alt-fill icon"></i>
                        <span className="location-title link">
                            {formation?.location || "Paris"}
                        </span>
                    </div>
                    <div className="days">
                        <i className="bi bi-briefcase-fill icon"></i>
                        <span className="location-title">{`Dans ${
                            days || 3
                        } jours`}</span>
                    </div>
                </div>
                <div className="participants flex-row">
                    {participants?.map((participant) => {
                        const nameAbr =
                            participant?.firstName?.charAt(0).toUpperCase() +
                            participant?.lastName?.charAt(0).toUpperCase()
                        return (
                            <TitleCircle key={Math.random()} title={nameAbr} />
                        )
                    })}
                    <span className="location grey">{`${participants.length} Participants`}</span>
                </div>
                <div className="participate flex-row justify-between">
                    <b>Participate</b>
                    <div className="links">
                        <b className="pink link icon">Non</b>
                        <b className="pink link icon">Oui</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
