import React, { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { capitalizeWord } from "../redux/useableFunctions"
import folder from "../assets/img/folder.png"
import api from "../redux/api"
import "./TalentMapping.css"

export default function TalentMapping() {
    const managerID = useSelector((state) => state.userStore.id)
    useEffect(() => {
        api.get("/projects/get-by-manager/" + managerID).then((res) =>
            console.log(res.data)
        )
    }, [])
    const navigate = useNavigate()
    const location = useLocation()
    const talents = [
        { title: "data", collaborators: 23 },
        { title: "finance", collaborators: 12 },
        { title: "marketing", collaborators: 5 },
        { title: "operations", collaborators: 16 },
        { title: "product", collaborators: 8 },
        { title: "ressources humaines", collaborators: 18 },
        { title: "sales", collaborators: 10 },
        { title: "tech & IT", collaborators: 26 },
    ]
    return (
        <div className="talent-mapping-page flex-column">
            <h2 className="blue">Talents mapping</h2>
            <input
                className="search-input"
                type="search"
                placeholder="Rechercher une personne, une équipe..."
            />
            <h3 className="blue">{`Organisations (${talents.length})`}</h3>
            <div className="talents flex-row">
                {talents?.map((talent, index) => (
                    <div key={index} className="talent flex-column">
                        <img
                            onClick={() =>
                                navigate(location.pathname + "/" + talent.title)
                            }
                            src={folder}
                            className="bi bi-folder-fill folder"
                        ></img>
                        <b
                            className="blue link"
                            onClick={() =>
                                navigate(location.pathname + "/" + talent.title)
                            }
                        >
                            {capitalizeWord(talent.title)}
                        </b>
                        <span>{`${talent.collaborators} Collaborateurs`}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
