import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import DropdownLink from "../components/DropdownLink"
import { useSelector } from "react-redux"

export default function Manager() {
    const user = useSelector((state) => state.userStore.user)
    return (
        <div>
            {user.role === "manager" ? (
                <React.Fragment>
                    <Navbar home="manager">
                        <DropdownLink
                            title="Analytics"
                            linksArray={[
                                {
                                    title: "Tableau de Bord",
                                    path: "/manager/analytics/dashboard",
                                },
                                {
                                    title: "Process",
                                    path: "/manager/analytics/process",
                                },
                                {
                                    title: "Objectifs",
                                    path: "/manager/analytics/objectives",
                                },
                                {
                                    title: "Alertes",
                                    path: "/manager/analytics/alerts",
                                },
                            ]}
                        />
                        <DropdownLink
                            title="Recrutement"
                            linksArray={[
                                // {
                                //     title: "À effectuer",
                                //     path: "/manager/recruitment/to-be-done",
                                // },
                                {
                                    title: "En cours",
                                    path: "/manager/recruitment/in-process",
                                },
                                {
                                    title: "Suivi",
                                    path: "/manager/recruitment/suivi",
                                },
                                {
                                    title: "Onboarding",
                                    path: "/manager/recruitment/onboarding",
                                },
                                {
                                    title: "Tests Ajouté",
                                    path: "/manager/recruitment/tests",
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
                </React.Fragment>
            ) : (
                <div>You are not authorized for this.</div>
            )}
        </div>
    )
}
