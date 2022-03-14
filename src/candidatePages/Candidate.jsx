import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Navlink from "../components/Navlink"
import "../assets/css/Candidate.css"

export default function DashboardCandidate() {
    return (
        <div className="dashboard-candidate">
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
            <Outlet />
        </div>
    )
}
