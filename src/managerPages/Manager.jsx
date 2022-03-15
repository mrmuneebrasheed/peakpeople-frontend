import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import DropdownLink from "../components/DropdownLink"

export default function Manager() {
    return (
        <div>
            <Navbar home="manager">
                <DropdownLink
                    title="Analytics"
                    linksArray={[
                        {
                            title: "Objectifs",
                            path: "/manager/analytics/objectives",
                        },
                        { title: "Alertes", path: "/manager/analytics/alerts" },
                    ]}
                />
                <DropdownLink
                    title="Recrutement"
                    linksArray={[
                        {
                            title: "À éffectuer",
                            path: "/manager/recruitment/to-be-done",
                        },
                        {
                            title: "En cours",
                            path: "/manager/recruitment/in-process",
                        },
                        {
                            title: "Suivi",
                            path: "/manager/recruitment/following",
                        },
                        {
                            title: "Onboarding",
                            path: "/manager/recruitment/onboarding",
                        },
                    ]}
                />
                <DropdownLink
                    title="Management"
                    linksArray={[
                        {
                            title: "Talents Map",
                            path: "/manager/management/talents-map",
                        },
                        {
                            title: "Team",
                            path: "/manager/management/team",
                        },
                        {
                            title: "Succession",
                            path: "/manager/management/succession",
                        },
                        {
                            title: "Coaching",
                            path: "/manager/management/coaching",
                        },
                        {
                            title: "Learning",
                            path: "/manager/management/learning",
                        },
                        {
                            title: "Générer Compte",
                            path: "/manager/management/generate-account",
                        },
                    ]}
                />
                <DropdownLink
                    title="Relationship"
                    linksArray={[
                        {
                            title: "Feedbacks",
                            path: "/manager/relationship/feedbacks",
                        },
                        {
                            title: "Communication",
                            path: "/manager/relationship/communications",
                        },
                        {
                            title: "Bibliothéque",
                            path: "/manager/relationship/bibliotheque",
                        },
                    ]}
                />
            </Navbar>
            <Outlet />
        </div>
    )
}