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
        workTimeIndicator,
        formationAndDevelopmentIndicator,
        performanceManagementIndicator,
        successionPlanningIndicator,
        recommendationRateOfEmployees,
        financeIndicatorRH,
        turnover,
        retentionRate,
        supervisionRate,
    } = user
    const indicators = [
        {
            title: "INDICATEURS TECHNIQUES - IMPORTATIONS - SYSTÈMES SOLICITÉS",
            indicator: techniqueIndicator,
        },
        {
            title: "INDICATEURS FINANCES/ PERFORMANCES",
            indicator: financeIndicator,
        },
        {
            title: "INDICATEURS DE RECRUTEMENTS",
            indicator: recruitmentIndicator,
        },
        {
            title: "INDICATEURS MOTIVATION SATISFACTION",
            indicator: motivationSatisfactionIndicator,
        },
        { title: "INDICATEURS MOBILITÉ", indicator: mobilityIndicator },
        { title: "INDICATEURS FEEDBACKS", indicator: feedBackIndicator },
        { title: "TAUX DE RÉPONSE/ TAUX DE PARTAGES", indicator: responseRate },
        {
            title: "INDICATEURS DE TEMPS DE TRAVAIL",
            indicator: workTimeIndicator,
        },
        {
            title: "INDICATEURS DE FORMATIONS ET DE DEVELOPMENTS",
            indicator: formationAndDevelopmentIndicator,
        },
        {
            title: "INDICATEURS DE GESTION DE LA PERFORMANCES",
            indicator: performanceManagementIndicator,
        },
        {
            title: "INDICATEURS DE PLANIFICATION DE LA RELEVES",
            indicator: successionPlanningIndicator,
        },
        {
            title: "TAUX DE RECOMMENDATION DES SALAIRES VIS A VIS DE LEUR ENTREPRISE",
            indicator: recommendationRateOfEmployees,
        },
        { title: "INDICATEURS FINANCIER RH", indicator: financeIndicatorRH },
        { title: "TAUX DE ROULEMENT", indicator: turnover },
        { title: "TAUX DE RETENTION", indicator: retentionRate },
        { title: "TAUX D'ENCADREMENT", indicator: supervisionRate },
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
