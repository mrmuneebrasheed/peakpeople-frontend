import React from "react"
import { useNavigate } from "react-router-dom"
import "./BackButton.css"

export default function BackButton() {
    const navigate = useNavigate()
    return (
        <span className="back-button" onClick={() => navigate(-1)}>
            {"<"}
        </span>
    )
}
