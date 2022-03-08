import React, { useState } from "react"
import logo from "../assets/img/logo.png"
import "../assets/css/Entreprise.css"
import BlueBanner from "./BlueBanner"
import store from "../redux/store"
export default function Entreprise() {
    const entreprise = store.getState()
    const [yearOfCreation, setYearOfCreation] = useState("")
    const missions = ["SIRH", "Recrutement", "Human centric"]
    const figures = [
        { number: 2019, title: "année de création" },
        { number: 34, title: "postes ouverts" },
        { number: 346, title: "employés" },
        { number: "48%", title: "d'hommes" },
        { number: "52%", title: "de femmes" },
        { number: 32, title: "âge moyen" },
    ]
    const images = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5",
        "img6",
        "img7",
        "img8",
        "img9",
        "img10",
        "img11",
        "img12",
    ]
    return (
        <React.Fragment>
            <BlueBanner />
            <div className="entreprise-page">
                <div className="entreprise-title flex-row">
                    <div className="logo-div">
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                    <div className="flex-col">
                        <h1 className="title flex-row">Peak People</h1>
                        <div className="missions">
                            {missions.map((mission) => (
                                <span className="mission">{mission}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="entreprise-description flex-row">
                    <div className="description flex-col">
                        <div className="bg-white border-rounded card">
                            <h2 className="blue">En bref</h2>
                            <p className="paragraph">
                                Peak People est une suite de solutions en mode
                                Saas en management de la performance, des
                                compétences, des appétences et du potentiel
                                humain. Elle permet aux entreprises d’améliorer
                                leur compétitivité en anticipant leurs besoins
                                tout au long de leur développement permettant
                                ainsi un accompagnement ciblé de chaque
                                collaborateur à chaque étape de son parcours
                                dans l’organisation, et ce dès le recrutement.
                                <br />
                                <br />
                                Plus d'informations sur : <br />
                                <a
                                    href="https://www.peakpeople-hr.com/fr/"
                                    target="_blank"
                                >
                                    https://www.peakpeople-hr.com/fr/
                                </a>
                            </p>
                        </div>
                        <div className="bg-white border-rounded card flex-column">
                            <h2 className="blue ">Quelques chiffres</h2>
                            <div className="figures flex-row">
                                <div className="numbers flex-column">
                                    {figures.map((figure) => (
                                        <span className="number purple">
                                            {figure.number}
                                        </span>
                                    ))}
                                </div>
                                {/* <div className="vl"></div> */}
                                <div className="titles flex-column">
                                    {figures.map((figure) => (
                                        <span className="title">
                                            {figure.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border-rounded card blue ">
                            <h2>Suivez-nous!</h2>
                            <span>
                                <i className="bi bi-twitter nav-icon"></i>
                            </span>
                            <span>
                                <i className="bi bi-linkedin nav-icon"></i>
                            </span>
                            <span>
                                <i className="bi bi-facebook nav-icon"></i>
                            </span>
                        </div>
                    </div>
                    <div className="media">
                        {images.map((img) => (
                            <img
                                key={img}
                                className={`${img} icon`}
                                src={`/entreprisePage/${img}.png`}
                                alt={img}
                            ></img>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
