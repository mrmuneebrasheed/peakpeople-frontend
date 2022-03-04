import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Navlink from "../components/Navlink"
import "../assets/css/Candidate.css"
import Dashboard from "../components/Dashboard"

export default function DashboardCandidate() {
    return (
        <div className="dashboard-candidate">
            <Navbar>
                <Navlink title="L'entreprise" link="/candidate/entreprise" />
                <Navlink
                    title="Postes ouvert"
                    link="/candidate/postes-ouvert"
                />
            </Navbar>
            <Outlet />
        </div>
    )
}
