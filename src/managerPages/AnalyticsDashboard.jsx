import React, { PureComponent } from "react"
import { useSelector } from "react-redux"

import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts"

import "./AnalyticsDashboard.css"
const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
]

export default function AnalyticsDashboard() {
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
            title: "INDICATEURS TECHNIQUES - IMPORTATION - SYSTÈME SOLICITÉS",
            indicator: techniqueIndicator,
        },
        {
            title: "INDICATEURS FINANCE/ PERFORMANCES",
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
            title: "INDICATEURS DE FORMATION ET DE DEVELOPMENT",
            indicator: formationAndDevelopmentIndicator,
        },
        {
            title: "INDICATEURS DE GESTION DE LA PERFORMANCE",
            indicator: performanceManagementIndicator,
        },
        {
            title: "INDICATEURS DE PLANIFICATION DE LA RELEVE",
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
        <div className="analytics-dashboard flex-column">
            <h1 className="blue text-center">Indicateurs</h1>
            <div className="flex-row graphs">
                {financeIndicator &&
                    indicators.map((indicator) => (
                        <div className="graph bg-white border-rounded">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={40} data={data}>
                                    <Bar dataKey="uv" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                            <h3 className="pink text-center">
                                {indicator.title}
                            </h3>
                        </div>
                    ))}
            </div>
        </div>
    )
}
