import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { capitalizeWord } from "../redux/useableFunctions"
import api from "../redux/api"
import "./Talents.css"

export default function Talents() {
    const params = useParams()
    const managerID = useSelector((state) => state.userStore.id)
    const [projects, setProjects] = useState([])
    const [collaborators, setCollaborators] = useState([])
    useEffect(() => {
        api.get(
            "/projects/get-by-organization/" + managerID + "/" + params.talent
        ).then((res) => {
            console.log(res.data)
            setProjects(res.data.projects)
        })
    }, [])

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
            <h3 className="blue">{`Projets (${projects.length})`}</h3>
            <div className="projects flex-row justify-center">
                {projects[0] ? (
                    projects.map((project) => (
                        <div className="project bg-white border-rounded">
                            <h2 className="blue">{project.title}</h2>
                            <span className="pink">{`${project.collaborators.length} Collaborateurs`}</span>
                        </div>
                    ))
                ) : (
                    <h2 className="pink">Pas de Projets</h2>
                )}
            </div>
            <div className="collaborators flex-row">
                <h2 className="blue">{` Collaborateurs (${collaborators?.length})`}</h2>
            </div>
        </div>
    )
}
