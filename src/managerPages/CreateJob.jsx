import React, { useState } from "react"
import ProfileCardSmall from "../components/ProfileCardSmall"
import Modal from "react-modal"
import { useSelector } from "react-redux"
import api from "../redux/api"
import skillsArray from "../redux/skills"
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
    const [recruitmentStep, setRecruitmentStep] = useState("")
    const [recruitmentProcess, setRecruitmentProcess] = useState([])
    const [mode, setMode] = useState("à Distance")
    const [intervenants, setIntervenants] = useState([])
    const [profileRequired, setProfileRequired] = useState("")
    const [startingDate, setStartingDate] = useState("")
    const [recruitmentStartDate, setRecruitmentStartDate] = useState("")
    const [recruitmentEndDate, setRecruitmentEndDate] = useState("")
    const [skill, setSkill] = useState("")
    const [skillScoring, setSkillScoring] = useState(5)
    const [skillsRequired, setSkills] = useState([])
    const [softSkill, setSoftSkill] = useState("")
    const [softSkillScoring, setSoftSkillScoring] = useState(5)
    const [softSkillsRequired, setSoftSkills] = useState([])
    const [document, setDocument] = useState("")
    const [documentsToSend, setDocumentsToSend] = useState([])
    const [sector, setSector] = useState("")
    const [typology, setTypology] = useState("")
    const [salary, setSalary] = useState({
        minimum: 0,
        maximum: 0,
        showToCandidate: false,
    })
    const [numberOfHours, setNumberOfHours] = useState(0)
    const [location, setLocation] = useState("")
    const [experienceRequired, setExperienceRequired] = useState("")
    const [contractType, setContractType] = useState("")
    const [test, setTest] = useState("")
    const [testSuggested, setTestSuggested] = useState([])
    const [team, setTeam] = useState([])

    //Modal States
    const [showIntervenantModal, setShowIntervenantModal] = useState(false)
    const [modalMessage, setModalMessage] = useState("")
    const [ProfilesToDisplay, setProfilesToDisplay] = useState([])
    const [managerProfilesToDisplay, setManagerProfilesToDisplay] = useState([])
    const [search, setSearch] = useState("")
    const [managerSearch, setManagerSearch] = useState("")
    const [showSkillSuggestion, setSkillShowSuggestion] = useState(false)
    const [showSoftSkillSuggestion, setSoftSkillShowSuggestion] =
        useState(false)

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
    const addRecruitmentStep = () => {
        setRecruitmentProcess((initialState) => [
            ...initialState,
            { step: recruitmentStep, mode, intervenants },
        ])
        setRecruitmentStep("")
    }
    const addSkill = () => {
        setSkills((initialState) => [
            ...initialState,
            { title: skill, scoring: skillScoring },
        ])
        setSkill("")
    }
    const addSoftSkill = () => {
        setSoftSkills((initialState) => [
            ...initialState,
            { title: softSkill, softSkillScoring },
        ])
        setSoftSkill("")
    }
    const addDocument = (files) => {
        setDocumentsToSend((initialState) => [...initialState, files[0]])
        setDocument("")
    }
    const addTest = (files) => {
        setTestSuggested((initialState) => [...initialState, files[0]])
        setTest("")
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
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    const intervenantsHandler = () => {
        setShowIntervenantModal(false)
    }
    return (
        <div className="create-job-page flex-row justify-between bg-white border-rounded">
            <div className="col-1 flex-column">
                <h2 className="blue text-center">Créer recrutement</h2>
                <div className="section flex-row align-center">
                    <label className="label pink" htmlFor="job-title">
                        Intitule de Poste
                    </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="form-input title-input"
                        required
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
                        onKeyDown={(e) =>
                            e.key === "Enter" &&
                            setMissions((initial) => initial + "\n")
                        }
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
                        onKeyDown={(e) =>
                            e.key === "Enter" &&
                            setObjectives((initial) => initial + "\n")
                        }
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
                        onKeyDown={(e) =>
                            e.key === "Enter" &&
                            setDescription((initial) => initial + "\n")
                        }
                        className="description-input form-input"
                        required
                        name="description"
                        id="description-input"
                        rows="10"
                        placeholder="Description"
                    ></textarea>
                </div>
                <div className="section flex-column">
                    <label
                        className="label pink"
                        htmlFor="profile-required-input"
                    >
                        Profil Recherché
                    </label>
                    <textarea
                        onChange={(e) => setProfileRequired(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" &&
                            setProfileRequired((initial) => initial + "\n")
                        }
                        className="profile-required-input form-input"
                        required
                        name="profile-required"
                        id="profile-required-input"
                        rows="10"
                        placeholder="Profil recherché"
                    ></textarea>
                </div>
                <div className="section flex-column">
                    <label
                        className="label pink"
                        htmlFor="enterprise-description-input"
                    >
                        À propos de nous
                    </label>
                    <textarea
                        onChange={(e) =>
                            setEnterpriseDescription(e.target.value)
                        }
                        onKeyDown={(e) =>
                            e.key === "Enter" &&
                            setEnterpriseDescription(
                                (initial) => initial + "\n"
                            )
                        }
                        className="enterprise-description-input form-input"
                        name="enterprise-description"
                        id="enterprise-description-input"
                        rows="10"
                        placeholder="À propos de Nous"
                    ></textarea>
                </div>
                <div className="section flex-column">
                    <label className="label pink" htmlFor="team-input">
                        Manageur
                    </label>
                    <input
                        onChange={(e) => setManagerSearch(e.target.value)}
                        className="enterprise-description-input form-input"
                        name="enterprise-description"
                        id="team-input"
                        placeholder="Rechercher les personne..."
                    ></input>
                    <div className="profiles skills">
                        {managerProfilesToDisplay[0] ? (
                            ProfilesToDisplay.map((profile) => (
                                <ProfileCardSmall
                                    key={Math.random()}
                                    firstName={profile.firstName}
                                    lastName={profile.lastName}
                                    enterprise={profile.enterprise}
                                    job={profile.job}
                                    role={profile.role}
                                ></ProfileCardSmall>
                            ))
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
                <div className="section flex-column">
                    <label className="label pink" htmlFor="team-input">
                        Membres de l'équipe
                    </label>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" &&
                            setSearch((initial) => initial + "\n")
                        }
                        className="enterprise-description-input form-input"
                        name="enterprise-description"
                        id="team-input"
                        placeholder="Rechercher les personne..."
                    ></input>
                    <div className="profiles skills">
                        {ProfilesToDisplay[0] ? (
                            ProfilesToDisplay.map((profile) => (
                                <ProfileCardSmall
                                    key={Math.random()}
                                    firstName={profile.firstName}
                                    lastName={profile.lastName}
                                    enterprise={profile.enterprise}
                                    job={profile.job}
                                    role={profile.role}
                                ></ProfileCardSmall>
                            ))
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
                <div className="section flex-column justify-between">
                    <label htmlFor="recruitment-process" className="label pink">
                        Process de Recrutement
                    </label>
                    <div className="flex-row justify-between">
                        <input
                            onChange={(e) => setRecruitmentStep(e.target.value)}
                            value={recruitmentStep}
                            type="text"
                            id="recruitment-process"
                            className="form-input"
                            placeholder="Ajouter étape"
                        />
                        <select
                            onChange={(e) => setMode(e.target.value)}
                            className="form-input"
                        >
                            <option>Selectionner le Mode</option>
                            <option value={"à distance"}>à Distance</option>
                            <option value={"par téléphone"}>
                                par télephone
                            </option>
                            <option value={"avec manager"}>avec manager</option>
                            <option value={"avec une personne d'équipe"}>
                                avec une personne d'équipe
                            </option>
                        </select>
                        <button
                            onClick={() => setShowIntervenantModal(true)}
                            className="pink-white-button"
                        >
                            Ajouter une intervenant
                        </button>
                        <button
                            onClick={addRecruitmentStep}
                            className="pink-button"
                        >
                            Ajouter
                        </button>
                    </div>
                    <ol className="flex-column recruitment-steps skills">
                        {recruitmentProcess?.map((step, indextoDelete) => (
                            <li key={indextoDelete} className="">
                                {`${step.step} - ${step.mode}`}
                                <span
                                    onClick={() =>
                                        setRecruitmentProcess((initialState) =>
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
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="col-2 flex-column">
                <div>
                    <div className="section flex-column">
                        <label className="label pink" htmlFor="job-sector">
                            Département de Recrutement
                        </label>
                        <select
                            onChange={(e) => setSector(e.target.value)}
                            value={sector}
                            className="sector-input form-input"
                            required
                            id="browsers"
                        >
                            <option disabled value="">
                                Département de Recrutement
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
                    <div className="section flex-column">
                        <label className="label pink" htmlFor="typology">
                            Typologie de métier
                        </label>
                        <select
                            onChange={(e) => setTypology(e.target.value)}
                            value={typology}
                            className="sector-input form-input"
                            id="browsers"
                        >
                            <option disabled value="">
                                Typologie de métier
                            </option>
                            <option value="informatique/telecom">
                                Service
                            </option>
                            <option value="n+1">n+1</option>
                            <option value="n+2">n+2</option>
                            <option value="n+3">n+3</option>
                            <option value="n+4">n+4</option>
                        </select>
                    </div>
                    <div className="section">
                        <span className="label pink">
                            Compétences Technique
                        </span>
                        <div className="flex-row Required-input">
                            <input
                                onFocus={() => setSkillShowSuggestion(true)}
                                onBlur={() => setSkillShowSuggestion(false)}
                                onChange={(e) => {
                                    setSkill(e.target.value)
                                }}
                                value={skill}
                                className="form-input"
                                required
                                type="text"
                                name="Required"
                                id="skills"
                                placeholder="Ajouter Competence"
                            />
                            {showSkillSuggestion && (
                                <div className="suggestions">
                                    {skillsArray
                                        .filter((oneSkill) =>
                                            oneSkill
                                                .toLowerCase()
                                                .includes(skill.toLowerCase())
                                        )
                                        .map((skill, index) => (
                                            <p
                                                key={index}
                                                onClick={() => {
                                                    setSkillShowSuggestion(
                                                        false
                                                    )
                                                    setSkill(skill)
                                                }}
                                                className="suggestion text-center"
                                            >
                                                {skill}
                                            </p>
                                        ))}
                                </div>
                            )}
                            <select
                                onChange={(e) =>
                                    setSkillScoring(e.target.value)
                                }
                                className="form-input"
                                name="scoring"
                                id="skill-scoring"
                            >
                                <option value="5">Scoring</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button
                                type="submit"
                                onClick={addSkill}
                                className="pink-button"
                            >
                                Ajouter
                            </button>
                        </div>

                        <div className="skills flex-row">
                            {skillsRequired?.map((skill, indextoDelete) => (
                                <>
                                    <span
                                        key={indextoDelete}
                                        className="skill-box"
                                    >
                                        {`${skill.title} - ${skill.scoring}`}
                                    </span>
                                    <span
                                        onClick={() =>
                                            setSkills((initialState) =>
                                                initialState.filter(
                                                    (skill, index) =>
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
                        <span className="label pink">
                            Compétences Soft Skills
                        </span>
                        <div className="flex-row skills-input">
                            <input
                                onFocus={() => setSoftSkillShowSuggestion(true)}
                                onBlur={() => setSoftSkillShowSuggestion(false)}
                                onChange={(e) => {
                                    setSoftSkill(e.target.value)
                                }}
                                value={softSkill}
                                className="form-input"
                                type="text"
                                name="skills"
                                id="skills"
                                placeholder="Ajouter Soft Skill"
                            />
                            {showSoftSkillSuggestion && (
                                <div className="suggestions">
                                    {skillsArray
                                        .filter((oneSkill) =>
                                            oneSkill
                                                .toLowerCase()
                                                .includes(
                                                    softSkill.toLowerCase()
                                                )
                                        )
                                        .map((skill, index) => (
                                            <p
                                                key={index}
                                                onClick={() => {
                                                    setSoftSkillShowSuggestion(
                                                        false
                                                    )
                                                    setSoftSkill(skill)
                                                }}
                                                className="suggestion text-center"
                                            >
                                                {skill}
                                            </p>
                                        ))}
                                </div>
                            )}
                            <select
                                onChange={(e) =>
                                    setSoftSkillScoring(e.target.value)
                                }
                                className="form-input"
                                name="scoring"
                                id="soft-skill-scoring"
                            >
                                <option value="5">Scoring</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button
                                type="submit"
                                onClick={addSoftSkill}
                                className="pink-button"
                            >
                                Ajouter
                            </button>
                        </div>

                        <div className="skills flex-row">
                            {softSkillsRequired ? (
                                softSkillsRequired.map(
                                    (skill, indextoDelete) => (
                                        <>
                                            <span
                                                key={indextoDelete}
                                                className="skill-box"
                                            >
                                                {skill.title}
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
                    <div className="section flex-column justify-between align-center">
                        <div className="flex-row">
                            <label htmlFor="salary" className="label pink">
                                Salaire Proposé
                            </label>
                            <input
                                onChange={(e) =>
                                    setSalary((initial) => ({
                                        maximum: initial.maximum,
                                        minimum: e.target.value,
                                        showToCandidate:
                                            initial.showToCandidate,
                                    }))
                                }
                                // value={salary.minimum}
                                className="form-input"
                                required
                                type="number"
                                name="salary"
                                id="salary"
                                placeholder="Salaire minimum"
                            />
                            <input
                                onChange={(e) =>
                                    setSalary((initial) => ({
                                        maximum: e.target.value,
                                        minimum: initial.minimum,
                                        showToCandidate:
                                            initial.showToCandidate,
                                    }))
                                }
                                // value={salary.maximum}
                                className="form-input"
                                required
                                type="number"
                                name="salary"
                                id="salary"
                                placeholder="Salaire maximum"
                            />
                        </div>
                        <div className="flex-row">
                            <input
                                onChange={() => {
                                    setSalary((initial) => ({
                                        maximum: initial.maximum,
                                        minimum: initial.minimum,
                                        showToCandidate:
                                            !initial.showToCandidate,
                                    }))
                                }}
                                type="checkbox"
                                name="show"
                                id="show"
                            />
                            <label htmlFor="show">
                                Cochez, si vous voulez partager le salaire à des
                                candidats
                            </label>
                        </div>
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
                            {"Lieu(x) de Travail"}
                        </label>
                        <input
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            type="text"
                            className="form-input"
                            required
                            placeholder="Lieux"
                            id="location"
                        />
                    </div>
                    <div className="section flex-column justify-between">
                        <label htmlFor="experience" className="label pink">
                            {"Expérience Réquise (nombre d'années)"}
                        </label>
                        <input
                            onChange={(e) =>
                                setExperienceRequired(e.target.value)
                            }
                            value={experienceRequired}
                            className="form-input"
                            required
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
                            required
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
                            Date de Commencement de Travail
                        </label>
                        <input
                            onChange={(e) => setStartingDate(e.target.value)}
                            value={startingDate}
                            className="form-input date-input"
                            required
                            type="date"
                            name="starting-date"
                            id="starting-date"
                        />
                    </div>
                    <div className="section flex-column align-center">
                        <label
                            htmlFor="recruitment-start-date"
                            className="label pink"
                        >
                            Date de Commencement de Recrutement
                        </label>
                        <input
                            onChange={(e) =>
                                setRecruitmentStartDate(e.target.value)
                            }
                            value={recruitmentStartDate}
                            className="form-input date-input"
                            required
                            type="date"
                            name="starting-date"
                            id="recruitment-start-date"
                        />
                    </div>
                    <div className="section flex-column align-center">
                        <label
                            htmlFor="recruitment-end-date"
                            className="label pink"
                        >
                            Date de Fin de Recrutement
                        </label>
                        <input
                            onChange={(e) =>
                                setRecruitmentEndDate(e.target.value)
                            }
                            value={recruitmentEndDate}
                            className="form-input date-input"
                            required
                            type="date"
                            name="starting-date"
                            id="recruitment-end-date"
                        />
                    </div>
                    <div className="section flex-column justify-between">
                        <label className="label pink">
                            Documents à envoyer
                        </label>
                        <div className="flex-row">
                            <input
                                onChange={(e) => addDocument(e.target.files)}
                                type="file"
                                hidden
                                name="document"
                                id="document"
                                className="form-input"
                                placeholder="Nom du document"
                            />
                            <label htmlFor="document" className="pink-button">
                                Ajouter un Document +
                            </label>
                        </div>
                        <div className="flex-row documents">
                            {documentsToSend?.map((document, indextoDelete) => (
                                <span key={indextoDelete}>
                                    <span className="skill-box">
                                        {document.name}
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
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="section flex-column">
                        <label className="label pink">Test Conseillé</label>
                        <div className="flex-row">
                            <input
                                onChange={(e) => addTest(e.target.files)}
                                value={test}
                                type="file"
                                hidden
                                name="test"
                                id="test"
                                className="form-input"
                                placeholder="Ajouter Test"
                            />
                            <label htmlFor="test" className="pink-button">
                                Ajouter un test +
                            </label>
                        </div>
                        <ol className="flex-column test-suggested skills">
                            {testSuggested?.map((test, indextoDelete) => (
                                <li key={indextoDelete} className="">
                                    {test.name}
                                    <span
                                        onClick={() =>
                                            setTestSuggested((initialState) =>
                                                initialState.filter(
                                                    (test, index) =>
                                                        index !== indextoDelete
                                                )
                                            )
                                        }
                                        className="delete-button"
                                    >
                                        x
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="section flex-column">
                    <label className="label pink">Canaux de Recrutement</label>
                    <div className="flex-row">
                        <input type="checkbox" name="linkedIn" id="linkedIn" />
                        <label htmlFor="linkedIn">LinkedIn</label>
                    </div>
                    <div className="flex-row">
                        <input
                            type="checkbox"
                            name="job-board"
                            id="job-board"
                        />
                        <label htmlFor="job-board">Job Board</label>
                    </div>
                    <div className="flex-row">
                        <input
                            type="checkbox"
                            name="cabinet-de-recrutement"
                            id="cabinet"
                        />
                        <label htmlFor="cabinet">Cabinet de recrutement</label>
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
                isOpen={showIntervenantModal}
                onRequestClose={() => setShowIntervenantModal(false)}
                style={customStyles}
            >
                <div className="fade-in modal-form">
                    <span
                        onClick={() => setShowIntervenantModal(false)}
                        className="close-button"
                    >
                        X
                    </span>
                    <h3 className="pink">{"Ajouter une intervenant"}</h3>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-input"
                        type="search"
                        name="intervenant"
                        id="intervenant"
                        placeholder="Rechercher une intervenant"
                    />
                </div>
                <div className="intervenants flex-row">
                    {ProfilesToDisplay[0] ? (
                        ProfilesToDisplay.map((profile) => (
                            <ProfileCardSmall
                                firstName={profile.firstName}
                                lastName={profile.lastName}
                                job={profile.job}
                                role={profile.role}
                                enterprise={profile.enterprise}
                            ></ProfileCardSmall>
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
                <button onClick={intervenantsHandler} className="pink-button">
                    Ajouter
                </button>
            </Modal>
        </div>
    )
}
