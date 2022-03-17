import React from "react"
import search from "../assets/img/search.svg"
import "./CreateAlert.css"

export default function CreateAlert() {
    return (
        <div className="create-alert-page">
            <h2 className="blue">Alerte</h2>
            <input className="" type="text" placeholder="Titre de l'alerte" />
            <textarea
                cols="30"
                rows="10"
                placeholder="Contenu de l'alerte"
            ></textarea>
            <div className="scoring">Scoring</div>
            <h2 className="blue title">Canal de diffusion</h2>
            <p className="light-font">
                Sélectionnez un ou plusieurs canal de diffusion
            </p>
            <div className="canals">
                <input type="checkbox" name="mail" id="mail" />
                <label htmlFor="mail">Mails</label>
                <input type="checkbox" name="sms" id="sms" />
                <label htmlFor="sms">SMS</label>
                <input type="checkbox" name="linked-in" id="linked-in" />
                <label htmlFor="linked-in">LinkedIn</label>
            </div>
            <h2 className="title blue">Envoyer à</h2>
            <input
                className="search-bar"
                type="search"
                name="search"
                id="search"
                // placeholder="&#xF52A;"
                placeholder="Rechercher une personne, un poste, une équipe..."
            ></input>
        </div>
    )
}
