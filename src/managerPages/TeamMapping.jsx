import React, { useState, useEffect } from "react"
import ProfileCardSmall from "../components/ProfileCardSmall"
import { useParams } from "react-router-dom"
import api from "../redux/api"
import "./TeamMapping.css"

export default function TeamMapping() {
    const params = useParams()
    const projectID = params.projectID
    const [project, setProject] = useState({})
    useEffect(() => {
        api.get("/projects/get-one-project/" + projectID).then((res) => {
            setProject(res.data.project)
            console.log(res.data.project)
        })
    }, [])

    return (
        <div className="team-mapping-page">
            <h2 className="blue">Projet</h2>
            {project.title && (
                <div className="project bg-white border-rounded">
                    <h2 className="pink">{project.title}</h2>
                    <p>{project.description}</p>
                    <h2 className="blue">{`Collaborators (${project.collaborators.length})`}</h2>
                    <div className="collaborators flex-row">
                        {project.collaborators.map((collaborator, index) => (
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
            )}
        </div>
    )
}
