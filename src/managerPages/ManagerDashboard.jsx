import React from "react"
import IndicatorCard from "../components/IndicatorCard"
import ProfileCard from "../components/ProfileCard"
import { useSelector } from "react-redux"
import "./ManagerDashboard.css"
import Calender from "../components/Calender"

// React Calender imports

export default function ManagerDashboard() {
    const user = useSelector((state) => state.userStore.user)
    const {
        financeIndicator,
        recruitmentIndicator,
        motivationSatisfactionIndicator,
        techniqueIndicator,
        mobilityIndicator,
        feedBackIndicator,
        responseRate,
    } = user
    const indicators = [
        {
            title: "INDICATEURS TECHNIQUES - IMPORTATION - SYSTÈME SOLICITÉS",
            indicator: techniqueIndicator,
        },
        {
            title: "INDICATEURS FINANCE/ PERFORMANCES",
            indicator: financeIndicator,
        },
        { title: "INDICATEURS recrutements", indicator: recruitmentIndicator },
        {
            title: "INDICATEURS motivation satisfaction",
            indicator: motivationSatisfactionIndicator,
        },
        { title: "INDICATEURS MOBILITÉ", indicator: mobilityIndicator },
        { title: "INDICATEURS FEEDBACKS", indicator: feedBackIndicator },
        { title: "TAUX DE RÉPONSE/ TAUX DE PARTAGES", indicator: responseRate },
    ]
    return (
        <div className="manager-dashboard">
            <div className="flex-row">
                <ProfileCard />
                <div className="agenda">
                    <Calender />
                </div>
            </div>
            <div>
                <h2>Mes Indicateurs</h2>
                {financeIndicator ? (
                    <div className="indicators">
                        {indicators.map((indicator) => (
                            <IndicatorCard
                                key={indicator.title}
                                title={indicator.title}
                                value={indicator.indicator?.value}
                                trend={indicator.indicator?.trend}
                            />
                        ))}
                    </div>
                ) : (
                    <div>Pas des Indicateurs</div>
                )}
            </div>
        </div>
    )
}
