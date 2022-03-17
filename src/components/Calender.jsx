import React, { useState } from "react"
import moment from "moment"
import { capitalizeWord } from "../redux/useableFunctions"
import EventBox from "../components/EventBox"
import "./Calender.css"

export default function Calender({ template = "week", objective }) {
    // console.log(moment("19990815, 10:45 am", "YYYYMMDD, h:mm a"))
    const [day, setDay] = useState(0)
    const [week, setWeek] = useState(0)
    const [month, setMonth] = useState(0)
    const [calender, setCalender] = useState(template)
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
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi",
    ]

    const startDate = moment()
        .add(7 * week, "days")
        .add(day, "d")
        .add(month, "M")

    const endDate = moment(startDate).add(7, "days")
    const startDay = moment(startDate).get("D")
    const startMonth = capitalizeWord(months[startDate.get("M")])
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
    const events = [
        { start: startDate, end: startDate.add(1, "hour"), title: "standup" },
        {
            start: moment(),
            end: moment().add(1, "hours"),
            title: "meeting",
        },
    ]
    // console.log(events.find((event) => event.day === startDate)?.title)
    const createEvent = (day, hour) => {}
    const monthlyCalender = []
    for (let i = 1; i <= startDate.daysInMonth(); i++)
        monthlyCalender.push(
            moment(
                `${startDate.get("year")}${(startDate.get("M") + 1)
                    .toString()
                    .padStart(2, 0)}${i.toString().padStart(2, 0)}"`,
                "YYYYMMDD"
            )
        )
    // console.log(monthlyCalender)
    return (
        <div className="calender">
            <div className="header flex-row justify-between align-center">
                {calender === "week" && (
                    <div className="date">
                        <span
                            onClick={() => setWeek((initial) => initial - 1)}
                            className="button back-button"
                        >{`<`}</span>
                        &nbsp;&nbsp;&nbsp;
                        {`du ${startDay} au ${
                            endDay - 1
                        } ${startMonth} ${startYear}`}
                        &nbsp;&nbsp;&nbsp;
                        <span
                            onClick={() => setWeek((initial) => initial + 1)}
                            className="button next-button"
                        >{`>`}</span>
                    </div>
                )}
                {calender === "month" && (
                    <div className="date">
                        <span
                            onClick={() => setMonth((initial) => initial - 1)}
                            className="button back-button"
                        >{`<`}</span>
                        &nbsp;&nbsp;&nbsp;
                        {`${startMonth} ${startYear}`}
                        &nbsp;&nbsp;&nbsp;
                        <span
                            onClick={() => setMonth((initial) => initial + 1)}
                            className="button next-button"
                        >{`>`}</span>
                    </div>
                )}
                {calender === "day" && (
                    <div className="date">
                        <span
                            onClick={() => setDay((initial) => initial - 1)}
                            className="button back-button"
                        >{`<`}</span>
                        &nbsp;&nbsp;&nbsp;
                        {`${capitalizeWord(
                            days[startDate.get("d")]
                        )} ${startDay} ${startMonth}`}
                        &nbsp;&nbsp;&nbsp;
                        <span
                            onClick={() => setDay((initial) => initial + 1)}
                            className="button next-button"
                        >{`>`}</span>
                    </div>
                )}
                <div className="buttons flex-row align-center">
                    {!objective && (
                        <select
                            onChange={(e) => setCalender(e.target.value)}
                            className="filter-option"
                        >
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
                    )}
                    <div>
                        <span className="pink-button add-button">+</span>
                    </div>
                </div>
            </div>
            <div className="calender-section">
                {template === "week" && calender === "week" && (
                    <div className="weekly days flex-row">
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
                                className="day flex-column"
                            >
                                <div className="day-title pink">{`${capitalizeWord(
                                    days[day.get("d")].slice(0, 3)
                                )} ${day.get("D")}`}</div>

                                <div className="events flex-column">
                                    {hours.map((hour) => (
                                        <div
                                            key={Math.random()}
                                            className="flex-row justify-center events-box"
                                            onClick={() =>
                                                createEvent(day, hour)
                                            }
                                        >
                                            {events
                                                .filter(
                                                    (event) =>
                                                        event.start.format(
                                                            "DD/MM/YYYY"
                                                        ) ===
                                                            day.format(
                                                                "DD/MM/YYYY"
                                                            ) &&
                                                        event.start.get(
                                                            "hours"
                                                        ) === hour &&
                                                        event.end.get("hours")
                                                )
                                                ?.map((event) => (
                                                    <EventBox
                                                        key={Math.random()}
                                                        event={event}
                                                    />
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {calender === "month" && (
                    <div className="monthly flex-row justify-between">
                        {days.map((day, index) => (
                            <div
                                key={Math.random()}
                                className="day flex-column"
                            >
                                <div className="day-title pink">
                                    {capitalizeWord(
                                        days[monthlyCalender[index].get("d")]
                                    )}
                                </div>
                                <div>
                                    {monthlyCalender
                                        .filter(
                                            (day) =>
                                                day.get("d") ===
                                                monthlyCalender[index].get("d")
                                        )
                                        ?.map((day) => (
                                            <div
                                                key={Math.random()}
                                                className="date"
                                                onClick={() => console.log()}
                                            >
                                                {day.get("D")}
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {calender === "day" && (
                    <div className="daily">
                        <div className="flex-column hours">
                            {hours.map((hour) => (
                                <div
                                    className="hours flex-row"
                                    key={Math.random()}
                                >
                                    <div className="hour">
                                        {`${hour.toString().padStart(2, 0)}:00`}
                                    </div>
                                    <div className="events flex-row">
                                        {events
                                            .filter(
                                                (event) =>
                                                    event.start.get("hours") ===
                                                    hour
                                            )
                                            ?.map((event) => (
                                                <EventBox
                                                    key={Math.random()}
                                                    event={event}
                                                />
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
