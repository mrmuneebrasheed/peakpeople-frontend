import React from "react"
import "./ProfileCardSmall.css"

export default function ProfileCardSmall({
    firstName,
    lastName,
    job,
    role,
    enterprise,
}) {
    return (
        <div className="profile-card-small">
            <input type="checkbox" />
            <h3 className="blue">{firstName}</h3>
            <h4>{job}</h4>
            <h4>{enterprise}</h4>
            {/* <span className="blue">{role}</span> */}
        </div>
    )
}
