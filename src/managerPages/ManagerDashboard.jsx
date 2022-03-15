import React from "react"
import IndicatorCard from "../components/IndicatorCard"
import ProfileCard from "../components/ProfileCard"
import { useSelector } from "react-redux"
import "./ManagerDashboard.css"

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
            title: "INDICATEUR FINANCE/ PERFORMANCE",
            indicator: financeIndicator,
        },
        { title: "INDICATEUR recrutement", indicator: recruitmentIndicator },
        {
            title: "INDICATEUR motivation satisfaction",
            indicator: motivationSatisfactionIndicator,
        },
        {
            title: "INDICATEURS TECHNIQUES - IMPORTATION - SYTÈME SOLICITÉS",
            indicator: techniqueIndicator,
        },
        { title: "INDICATEUR MOBILITÉ", indicator: mobilityIndicator },
        { title: "INDICATEUR FEEDBACK", indicator: feedBackIndicator },
        { title: "TAUX DE RÉPONSETAUX DE PARTAGE", indicator: responseRate },
    ]
    return (
        <div className="manager-dashboard">
            <div className="flex-row">
                <ProfileCard />
                <div className="agenda"></div>
            </div>
            <div>
                <h2>Mes Indicators</h2>
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
                    <div>No Indicators</div>
                )}
            </div>
        </div>
    )
}
