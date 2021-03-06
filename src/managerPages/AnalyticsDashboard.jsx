import React, { PureComponent } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

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
    const navigate = useNavigate()
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

    return (
        <div className="analytics-dashboard flex-column">
            <h1 className="blue text-center">Indicateurs</h1>
            <div className="flex-row graphs">
                {indicators[0] &&
                    indicators.map((indicator, index) => (
                        <div
                            onClick={() =>
                                navigate(
                                    "/manager/analytics/dashboard/indicator/" +
                                        index
                                )
                            }
                            className="graph bg-white border-rounded"
                        >
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
