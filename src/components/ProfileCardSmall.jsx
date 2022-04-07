import React from "react"
import "./ProfileCardSmall.css"

export default function ProfileCardSmall({
    id,
    firstName,
    lastName,
    job,
    role,
    enterprise,
    handleCheckbox,
}) {
    return (
        <div className="profile-card-small">
            <input type="checkbox" onClick={() => handleCheckbox(id)} />
            <h3 className="blue text-center">{`${firstName} ${lastName.toUpperCase()}`}</h3>
            <h4 className="text-center">{job}</h4>
            <h4 className="pink text-center">{enterprise}</h4>
            {/* <span className="blue">{role}</span> */}
        </div>
    )
}
