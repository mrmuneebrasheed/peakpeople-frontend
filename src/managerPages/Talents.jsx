import React from "react"
import { useParams } from "react-router-dom"
import { capitalizeWord } from "../redux/useableFunctions"
import "./Talents.css"

export default function Talents() {
    const params = useParams()
    console.log(params.talent)
    return (
        <div className="talent-page flex-column">
            <h2 className="blue">Talent Mapping</h2>
            <input
                className="search-input"
                type="search"
                placeholder="Rechercher une personne, une équipe..."
            />
            <h3 className="blue">{`Organisations > ${capitalizeWord(
                params.talent
            )}`}</h3>
        </div>
    )
}
