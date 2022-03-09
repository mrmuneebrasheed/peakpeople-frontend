import React from "react"
import Navbar from "../components/Navbar"
import Navlink from "../components/Navlink"

export default function Candidatures() {
    return (
        <div>
            <Navbar>
                <div className="nav-links">
                    <Navlink
                        title="L'entreprise"
                        link="/candidate/enterprise"
                    />
                    <Navlink title="Postes ouvert" link="/candidate/jobs" />
                    <Navlink
                        title="Mes Candidatures"
                        link="/candidate/candidatures"
                    />
                </div>
            </Navbar>
        </div>
    )
}
