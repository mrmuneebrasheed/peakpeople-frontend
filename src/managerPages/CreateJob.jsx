import React, { useState } from "react"
import Modal from "react-modal"
import { useSelector } from "react-redux"
import api from "../redux/api"
import "./CreateJob.css"

export default function CreateJob() {
    const id = useSelector((state) => state.userStore.id)
    const user = useSelector((state) => state.userStore.user)

    // Form inputs to send
    const [title, setTitle] = useState("")
    const [missions, setMissions] = useState("")
    const [objectives, setObjectives] = useState("")
    const [description, setDescription] = useState("")
    const [enterpriseDescription, setEnterpriseDescription] = useState("")
    const [recruitmentProcess, setRecruitmentProcess] = useState("")
    const [profileRequired, setProfileRequired] = useState("")
    const [startingDate, setStartingDate] = useState("")
    const [skill, setSkill] = useState("")
    const [skillsRequired, setSkills] = useState([])
    const [softSkill, setSoftSkill] = useState("")
    const [softSkillsRequired, setSoftSkills] = useState([])
    const [document, setDocument] = useState("")
    const [documentsToSend, setDocumentsToSend] = useState([])
    const [sector, setSector] = useState("")
    const [salary, setSalary] = useState("")
    const [numberOfHours, setNumberOfHours] = useState(0)
    const [location, setLocation] = useState("")
    const [experienceRequired, setExperienceRequired] = useState("")
    const [contractType, setContractType] = useState("")

    //Modal States
    const [showModal, setShowModal] = useState(false)
    const [modalMessage, setModalMessage] = useState("")

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    }

    // Handler Functions
    const addSkill = () => {
        setSkills((initialState) => [...initialState, skill])
        setSkill("")
    }
    const addSoftSkill = () => {
        setSoftSkills((initialState) => [...initialState, softSkill])
        setSoftSkill("")
    }
    const addDocument = () => {
        setDocumentsToSend((initialState) => [...initialState, document])
        setDocument("")
    }

    const sendRecruitment = () => {
        api.post("/jobs/create-one-job", {
            title,
            missions,
            objectives,
            description,
            enterpriseDescription,
            recruitmentProcess,
            profileRequired,
            startingDate,
            skillsRequired,
            softSkillsRequired,
            documentsToSend,
            createdBy: id,
            dateCreated: new Date(),
            enterprise: user.enterprise,
            sector,
            salary,
            numberOfHours,
            location,
            experienceRequired,
            contractType,
        })
    }
    return (
        <div className="create-job-page flex-row justify-between bg-white border-rounded">
            <div className="col-1 flex-column">
                <h2 className="blue text-center">Ajouter un Recrutement</h2>
                <div className="section flex-row align-center">
                    <label className="label pink" htmlFor="job-title">
                        Intitule de Poste
                    </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="form-input title-input"
                        type="text"
                        name="title"
                        id="job-title"
                        placeholder="Intitule de Poste"
                    />
                </div>
                <div className="section flex-column">
                    <label className="label pink" htmlFor="missions-input">
                        Missions
                    </label>
                    <textarea
                        onChange={(e) => setMissions(e.target.value)}
                        value={missions}
                        className="missions-input form-input"
                        name="missions"
                        id="missions-input"
                        rows="10"
                        placeholder="Missions"
                    ></textarea>
                </div>
                <div className="section flex-column">
                    <label className="label pink" htmlFor="objectives-input">
                        Objectifs
                    </label>
                    <textarea
                        onChange={(e) => setObjectives(e.target.value)}
                        value={objectives}
                        className="objectives-input form-input"
                        name="objectives"
                        id="objectives-input"
                        rows="10"
                        placeholder="Objectifs"
                    ></textarea>
                </div>
                <div className="section flex-column">
                    <label className="label pink" htmlFor="description-input">
                        Description du Poste
                    </label>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className="description-input form-input"
                        name="description"
                        id="description-input"
                        rows="10"
                        placeholder="Description"
                    ></textarea>
                </div>
                <div className="section flex-column">
                    <label
                        className="label pink"
                        htmlFor="enterprise-description-input"
                    >
                        À propose de nous
                    </label>
                    <textarea
                        onChange={(e) =>
                            setEnterpriseDescription(e.target.value)
                        }
                        value={enterpriseDescription}
                        className="enterprise-description-input form-input"
                        name="enterprise-description"
                        id="enterprise-description-input"
                        rows="10"
                        placeholder="À propose de Nous"
                    ></textarea>
                </div>
                <div className="section flex-column">
                    <label
                        className="label pink"
                        htmlFor="recruitment-process-input"
                    >
                        Processus de Recrutement
                    </label>
                    <textarea
                        onChange={(e) => setRecruitmentProcess(e.target.value)}
                        value={recruitmentProcess}
                        className="recruitment-process-input form-input"
                        name="recruitment-process"
                        id="recruitment-process-input"
                        rows="10"
                        placeholder="Processus de Recrutement"
                    ></textarea>
                </div>
                <div className="section flex-column">
                    <label
                        className="label pink"
                        htmlFor="profile-required-input"
                    >
                        Profil Récherché
                    </label>
                    <textarea
                        onChange={(e) => setProfileRequired(e.target.value)}
                        value={profileRequired}
                        className="profile-required-input form-input"
                        name="profile-required"
                        id="profile-required-input"
                        rows="10"
                        placeholder="Profil rechérché"
                    ></textarea>
                </div>
            </div>
            <div className="col-2 flex-column">
                <div>
                    <div className="section flex-column">
                        <label className="label pink" htmlFor="job-sector">
                            Sécteur de Recrutement
                        </label>
                        <select
                            onChange={(e) => setSector(e.target.value)}
                            value={sector}
                            className="sector-input form-input"
                            id="browsers"
                        >
                            <option disabled value="">
                                Secteur de Recrutement
                            </option>
                            <option value="informatique/telecom">
                                Informatique / Télécom
                            </option>
                            <option value="commerce/distributon">
                                Commerce / Distribution
                            </option>
                            <option value="banque/assurance">
                                Banque / Assurances
                            </option>
                            <option value="edition/communication/multimedia">
                                Edition / Communication / Multimedia
                            </option>
                            <option value="électronique/électricité">
                                Electronique / Electricité
                            </option>
                        </select>
                    </div>
                    <div className="section">
                        <div className="flex-row Required-input">
                            <input
                                onChange={(e) => setSkill(e.target.value)}
                                value={skill}
                                className="form-input"
                                type="text"
                                name="Required"
                                id="skills"
                                placeholder="Ajouter Competence"
                            />
                            <button
                                type="submit"
                                onClick={addSkill}
                                className="pink-button"
                            >
                                Ajouter
                            </button>
                        </div>
                        <span className="label pink">Compétences</span>
                        <div className="skills flex-row">
                            {skillsRequired?.map((skill, indextoDelete) => (
                                <>
                                    <span key={skill} className="skill-box">
                                        {skill}
                                    </span>
                                    <span
                                        onClick={() =>
                                            setSkills((initialState) =>
                                                initialState.filter(
                                                    (document, index) =>
                                                        index !== indextoDelete
                                                )
                                            )
                                        }
                                        className="delete-button"
                                    >
                                        x
                                    </span>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="section">
                        <div className="flex-row skills-input">
                            <input
                                onChange={(e) => setSoftSkill(e.target.value)}
                                value={softSkill}
                                className="form-input"
                                type="text"
                                name="skills"
                                id="skills"
                                placeholder="Ajouter Soft Skill"
                            />
                            <button
                                type="submit"
                                onClick={addSoftSkill}
                                className="pink-button"
                            >
                                Ajouter
                            </button>
                        </div>
                        <span className="label pink">
                            Compétences Soft Skills
                        </span>
                        <div className="skills flex-row">
                            {softSkillsRequired ? (
                                softSkillsRequired.map(
                                    (skill, indextoDelete) => (
                                        <>
                                            <span
                                                key={skill}
                                                className="skill-box"
                                            >
                                                {skill}
                                            </span>
                                            <span
                                                onClick={() =>
                                                    setSoftSkills(
                                                        (initialState) =>
                                                            initialState.filter(
                                                                (
                                                                    document,
                                                                    index
                                                                ) =>
                                                                    index !==
                                                                    indextoDelete
                                                            )
                                                    )
                                                }
                                                className="delete-button"
                                            >
                                                x
                                            </span>
                                        </>
                                    )
                                )
                            ) : (
                                <p>Aucune Compétence ajouté</p>
                            )}
                        </div>
                    </div>
                    <div className="section flex-row justify-between align-center">
                        <label htmlFor="salary" className="label pink">
                            Salaire Proposé
                        </label>
                        <input
                            onChange={(e) => setSalary(e.target.value)}
                            value={salary}
                            className="form-input"
                            type="text"
                            name="salary"
                            id="salary"
                            placeholder="Salaire"
                        />
                    </div>
                    <div className="section flex-row justify-between align-center">
                        <label htmlFor="hours" className="label pink">
                            Nombre d'heures
                        </label>
                        <input
                            onChange={(e) => setNumberOfHours(e.target.value)}
                            value={numberOfHours}
                            className="form-input"
                            type="number"
                            id="hours"
                            placeholder="Nombre d'heures"
                        />
                    </div>
                    <div className="section flex-row justify-between align-center">
                        <label htmlFor="location" className="label pink">
                            Lieux de Travail
                        </label>
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            type="text"
                            className="form-input"
                            placeholder="Lieux"
                            id="location"
                        />
                    </div>
                    <div className="section flex-row justify-between">
                        <label htmlFor="experience" className="label pink">
                            Expérience Réquis
                        </label>
                        <input
                            onChange={(e) =>
                                setExperienceRequired(e.target.value)
                            }
                            value={experienceRequired}
                            className="form-input"
                            type="text"
                            name="experience"
                            id="experience"
                            placeholder="Experience"
                        />
                    </div>
                    <div className="section flex-column justify-between align-center">
                        <label htmlFor="contract-type" className="label pink">
                            Type de Contrat
                        </label>
                        <select
                            onChange={(e) => setContractType(e.target.value)}
                            value={contractType}
                            className="sector-input form-input"
                            name="contract-type"
                            id="contract-type"
                        >
                            <option value="" disabled>
                                Type de Contrat
                            </option>
                            <option value="CDD">CDD</option>
                            <option value="CDI">CDI</option>
                            <option value="CTT/Interim">CTT / Interim</option>
                            <option value="Contrat d’apprentissage">
                                Contrat d'apprentissage
                            </option>
                            <option value="CUI – Contrat unique d’insertion">
                                CUI – Contrat unique d’insertion
                            </option>
                        </select>
                    </div>
                    <div className="section flex-column align-center">
                        <label htmlFor="starting-date" className="label pink">
                            Date de Commencement
                        </label>
                        <input
                            onChange={(e) => setStartingDate(e.target.value)}
                            value={startingDate}
                            className="form-input date-input"
                            type="date"
                            name="starting-date"
                            id="starting-date"
                        />
                    </div>
                    <div className="section flex-column justify-between">
                        <label htmlFor="document" className="label pink">
                            Documents à envoyer
                        </label>
                        <div className="flex-row">
                            <input
                                onChange={(e) => setDocument(e.target.value)}
                                value={document}
                                type="text"
                                name=""
                                id="document"
                                className="form-input"
                                placeholder="Nom du document"
                            />
                            <button
                                onClick={addDocument}
                                className="pink-button"
                            >
                                Ajouter
                            </button>
                        </div>
                        <div className="flex-row documents">
                            {documentsToSend?.map((document, indextoDelete) => (
                                <>
                                    <span key={document} className="skill-box">
                                        {document}
                                    </span>
                                    <span
                                        onClick={() =>
                                            setDocumentsToSend((initialState) =>
                                                initialState.filter(
                                                    (document, index) =>
                                                        index !== indextoDelete
                                                )
                                            )
                                        }
                                        className="delete-button"
                                    >
                                        x
                                    </span>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <button
                    onClick={sendRecruitment}
                    className="submit-button align-self-center"
                >
                    Envoyer Recrutement
                </button>
            </div>
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                style={customStyles}
            >
                <div>
                    <h1 className="blue">{modalMessage}</h1>
                </div>
            </Modal>
        </div>
    )
}
