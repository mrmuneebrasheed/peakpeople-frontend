import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import api from "../redux/api"
import ProfileCardSmall from "../components/ProfileCardSmall"
import "./Coaching.css"

export default function Coaching() {
    const managerID = useSelector((state) => state.userStore.id)
    const [intitule, setIntitule] = useState("")
    const [description, setDescription] = useState("")
    const [objectives, setObjectives] = useState("")
    const [collaborators, setCollaborators] = useState([])
    const [collaboratorsSelected, setCollaboratorsSelected] = useState([])
    useEffect(() => {
        api.get("/collaborators/get-by-organization/" + managerID + "/").then(
            (res) => {
                console.log(res.data)
                setCollaborators(res.data.collaborators)
            }
        )
    }, [])

    const handleCollaboratorAdd = (collaboratorID) => {
        setCollaboratorsSelected((initial) => [...initial, collaboratorID])
    }
    const handleSend = () => {
        api.post("/coaching/save-one", {
            intitule,
            description,
            objectives,
            collaborators: collaboratorsSelected,
            reference: managerID,
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    return (
        <div className="coaching-page">
            <h2 className="blue">Coaching/Mentoring</h2>
            <div className="coaching-form flex-column bg-white border-rounded">
                <h3 className="pink">Intitule</h3>
                <input
                    onChange={(e) => setIntitule(e.target.value)}
                    type="text"
                    id="intitule"
                    className="form-input"
                    placeholder="Intitule"
                />
                <h3 className="pink">Description</h3>
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-input"
                    id="description"
                    cols="30"
                    rows="10"
                    placeholder="Description"
                ></textarea>
                <h3 className="pink">Objectifs</h3>
                <textarea
                    onChange={(e) => setObjectives(e.target.value)}
                    className="objectives-input form-input"
                    name="objectives"
                    id="objectives-input"
                    rows="10"
                    placeholder="Objectifs"
                ></textarea>
                <h3 className="pink">Choix du Binome</h3>
                <input
                    type="search"
                    className="form-input"
                    placeholder="Rechercher un talent"
                />
                <div className="collaborators flex-row">
                    {collaborators.map((collaborator, index) => (
                        <ProfileCardSmall
                            key={index}
                            id={collaborator._id}
                            handleCheckbox={handleCollaboratorAdd}
                            firstName={collaborator.firstName}
                            lastName={collaborator.lastName}
                            job={collaborator.job}
                            role={collaborator.role}
                            enterprise={collaborator.enterprise}
                        />
                    ))}
                </div>
                <button className="pink-button" onClick={handleSend}>
                    Envoyer
                </button>
            </div>
        </div>
    )
}
