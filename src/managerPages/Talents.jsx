import React, { useEffect, useState } from "react"
import ProfileCardSmall from "../components/ProfileCardSmall"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { capitalizeWord } from "../redux/useableFunctions"
import api from "../redux/api"
import "./Talents.css"

export default function Talents() {
    const navigate = useNavigate()
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
        api.get("/collaborators/get-by-organization/" + managerID + "/").then(
            (res) => {
                console.log(res.data)
                setProjects(res.data.projects)
            }
        )
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
            <div className="projects flex-row">
                {projects[0] ? (
                    projects.map((project, index) => (
                        <div
                            key={index}
                            className="project bg-white border-rounded"
                            onClick={() =>
                                navigate(
                                    "/manager/management/team/" + project._id
                                )
                            }
                        >
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
                <div className="collaborators-list bg-white border-rounded">
                    {collaborators !== [] &&
                        collaborators.map((collaborator, index) => (
                            <ProfileCardSmall
                                key={index}
                                firstName={collaborator.firstName}
                                lastName={collaborator.lastName}
                                job={collaborator.job}
                                role={collaborator.role}
                                enterprise={collaborator.enterprise}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}
