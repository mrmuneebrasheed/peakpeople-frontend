import { createStore } from "redux"

const jobsReducer = (
    state = {
        jobs: [
            {
                title: "UX Designer",
                enterprise: "Peak People",
                location: "Paris",
                contractType: "CDI",
                description:
                    "Le profil idéal chez Georges c’est bien sûr la personne qui aura une belle expertise dans son domaine d’activité.",
                logo: "",
                dateCreated: new Date(),
                candidates: [1, 2, 3],
            },
            {
                title: "Full Stack Developpeur",
                enterprise: "Peak People",
                location: "Paris",
                contractType: "CDI",
                logo: "",
                dateCreated: new Date(),
                candidates: [1, 2, 3, 4, 5],
            },
        ],
    },
    action
) => {
    switch (action.type) {
        case "setJobs": {
        }
        default:
            return state
    }
}

export default createStore(jobsReducer)
