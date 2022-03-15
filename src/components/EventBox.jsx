import React from "react"
import "./EventBox.css"

export default function EventBox({ event }) {
    return (
        <div className={`event-box ${event ? "colored" : "blank"}`}>
            <span className="event-title">{event?.title}</span>
        </div>
    )
}
