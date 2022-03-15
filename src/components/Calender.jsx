import React, { useState } from "react"
import moment from "moment"
import { capitalizeWord } from "../redux/useableFunctions"
import "./Calender.css"

export default function Calender({}) {
    const [week, setWeek] = useState(0)
    const months = [
        "janvier",
        "fevrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "aout",
        "septembre",
        "octobre",
        "novembre",
        "decembre",
    ]
    const days = [
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
        "dimanche",
    ]

    const startDate = moment().add(7 * week, "days")
    const endDate = moment(startDate).add(7, "days")
    const startDay = moment(startDate).get("D")
    const startMonth = capitalizeWord(months[moment(startDate).get("month")])
    const startYear = moment(startDate).get("year")
    const endDay = moment(endDate).get("D")

    const daysToDisplay = []
    for (let i = 0; i < 7; i++) {
        daysToDisplay.push(moment(startDate).add(i, "days"))
    }
    const hours = []
    for (let i = 9; i <= 17; i++) {
        hours.push(i)
    }
    return (
        <div className="calender">
            <div className="header flex-row justify-between align-center">
                <div className="date">
                    <span
                        onClick={() => setWeek((initial) => initial - 1)}
                        className="button back-button"
                    >{`<`}</span>
                    &nbsp;&nbsp;&nbsp;
                    {`du ${startDay} au ${endDay} ${startMonth} ${startYear}`}
                    &nbsp;&nbsp;&nbsp;
                    <span
                        onClick={() => setWeek((initial) => initial + 1)}
                        className="button next-button"
                    >{`>`}</span>
                </div>
                <div className="buttons flex-row align-center">
                    <select className="filter-option">
                        <option className="option" value="week">
                            Semaine
                        </option>
                        <option className="option" value="month">
                            Mois
                        </option>
                        <option className="option" value="day">
                            Aujourd'hui
                        </option>
                    </select>
                    <div>
                        <span className="pink-button add-button">+</span>
                    </div>
                </div>
            </div>
            <div className="calender-section">
                <div className="days flex-row">
                    <div className="flex-column hours">
                        {hours.map((hour) => (
                            <div className="hour" key={Math.random()}>
                                {`${hour.toString().padStart(2, 0)}:00`}
                            </div>
                        ))}
                    </div>
                    {daysToDisplay.map((day) => (
                        <div
                            key={Math.random()}
                            className="day"
                        >{`${capitalizeWord(
                            days[day.get("d")].slice(0, 3)
                        )} ${day.get("D")}`}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
