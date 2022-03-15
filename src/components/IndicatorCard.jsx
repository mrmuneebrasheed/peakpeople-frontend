import React from "react"
import "./IndicatorCard.css"

export default function IndicatorCard({ title, value, trend }) {
    return (
        <div className="indicator-card flex-row">
            <div className="title blue">{title}</div>
            <div>
                {trend === "increase" ? (
                    <span className={`value increase`}>
                        <span className={`value ${trend}`}>{value}%</span>
                    </span>
                ) : (
                    <span className="value decrease">
                        &#9660; &nbsp;{value}%
                    </span>
                )}
            </div>
        </div>
    )
}
