import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import "./IndicatorDetails.css"

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

export default function IndicatorDetails() {
    const params = useParams()
    const index = params.indicator
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
    ]
    const indicator = indicators[index]
    return (
        <div className="indicator-details-page">
            <div className="graph bg-white border-rounded">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={150} height={40} data={data}>
                        <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
                <h3 className="pink text-center">{indicator.title}</h3>
            </div>
            <h1 className="blue">Details</h1>
            <div className="details bg-white border-rounded"></div>
        </div>
    )
}
