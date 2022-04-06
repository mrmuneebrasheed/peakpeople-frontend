import React, { useState, useEffect } from "react"
import CandidatureProfile from "../components/CandidatureProfile"
import api from "../redux/api"
import "./SuccessionPlanning.css"

export default function SuccessionPlanning() {
    const [search, setSearch] = useState("")
    const [departs, setDeparts] = useState([])
    useEffect(() => {
        api.get("/collaborators/get-by-status/depart")
            .then((res) => {
                setDeparts(res.data.collaborators)
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className="succession-planning-page">
            <h2 className="blue">Succession Planning</h2>
            <div className="flex-row">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="search"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Rechercher un talent"
                />
            </div>
            <div className="planning flex-row bg-white border-rounded">
                <div className="depart flex-column justify-center">
                    <h3 className="pink text-center">Départ</h3>
                    {departs[0] &&
                        departs.map((collaborator, index) => (
                            <CandidatureProfile
                                key={index}
                                date={new Date()}
                                candidate={collaborator}
                                navigateLink={
                                    "/manager/collaborator/" + collaborator._id
                                }
                            />
                        ))}
                </div>
                <div className="best-successor flex-column">
                    <h3 className="pink text-center">
                        Best Matching Successor
                    </h3>
                    {departs[0]?.bestSuccessor &&
                        departs.map((collaborator, index) => (
                            <CandidatureProfile
                                key={index}
                                date={new Date()}
                                candidate={collaborator.bestSuccessor}
                                navigateLink={
                                    "/manager/collaborator/" +
                                    collaborator?.bestSuccessor._id
                                }
                            />
                        ))}
                </div>
                <div className="other-successors flex-column">
                    <h3 className="pink text-center">
                        Other Matching Successors
                    </h3>
                    {departs[0]?.otherSuccessors[0] &&
                        departs.map((collaborator, index) => (
                            <div
                                key={index}
                                className="flex-row justify-evenly"
                            >
                                {collaborator.otherSuccessors(
                                    (collaborator, index) => (
                                        <CandidatureProfile
                                            key={index}
                                            date={new Date()}
                                            candidate={
                                                collaborator.bestSuccessor
                                            }
                                            navigateLink={
                                                "/manager/collaborator/" +
                                                collaborator._id
                                            }
                                        />
                                    )
                                )}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
