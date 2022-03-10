import { createSlice } from "@reduxjs/toolkit"

const jobSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
    },
    reducers: {
        setJobs(state, actions) {
            state.jobs = actions.payload
        },
    },
})

export const jobActions = jobSlice.actions
export default jobSlice

const job = {
    id: "job1",
    title: "Brand designer",
    enterprise: "Peak People",
    jobDescription:
        "Notre ambition : simplifier la vie de millions d'indépendants en automatisant leur comptabilité. Georges divise ainsi par cinq le temps et les coûts que nos client dédient à leur comptabilité. Notre croissance exceptionnelle s'appuie sur deux piliers fondamentaux : un produit élégant et bien pensé, et un dévouement total au service de nos utilisateurs. C’est précisément pour incarner Georges et ses valeurs altruistes au sein de notre équipe marketing que nous recherchons notre futur.e Brand Designer. En tant que Brand Designer, tu seras en charge de créer l'ensemble de nos supports marketing : site Internet, illustrations, bannières display, présentations, animations, print… Tu seras également responsable de notre identité visuelle et assureras la continuité de tes choix artistiques. Rattachée au Marketing, tu rejoindras une équipe aussi diverse que talentueuse.",
    enterpriseDescription:
        "Georges, c’est une application intelligente et une équipe attentionnée qui automatisent la comptabilité des indépendants. Fondée en 2016, la start-up propose un logiciel ludique centré sur l’expérience utilisateur et la puissance de l’intelligence artificielle. 20 fois plus rapide qu’un logiciel traditionnel et 4 fois moins cher qu’un expert-comptable, Georges est la révolution du logiciel de comptabilité indépendant. Aujourd’hui plus de 30 000 professionnels automatisent leur comptabilité avec Georges !",
    missions:
        "Décliner les concepts de marques en créant les nouvelles pages du site, des illustrations, ads et animations et des e-books, flyers, kakemonos. Faire une veille sur des SaaS Fintech et de nos concurrents pour proposer des améliorations nous permettant d’améliorer notre notoriété et de convertir plus de clients ! Travailler en collaboration avec les autres équipes (acquisition, sales, produit…) pour développer de nouveaux concepts innovants",
    profileRequired:
        "Tu es créatif·ve et curieux·se, tu es capable de résoudre des problématiques grâce au design. Tu vas au devant des projet et tu sais faire des propositions précises et les exécuter. Tu es autonome, organisé·e et tu as le goût du challenge. Tu es rigoureux·se et a le souci du détail, on dit de toi que tu es perfectionniste. Tu es familier·e avec l’univers SaaS et startup. Tu maîtrises la suite Adobe et Invision. Tu sais créer des illustrations. Bonus : tu sais faire du motion design !",
    skillsRequired: [
        "in-design",
        "After-effects",
        "illustrator",
        "photoshop",
        "gestion de projet",
    ],
    location: "Paris",
    contractType: "CDI",
    candidates: [],
    dateCreated: new Date(),
    startingDate: new Date(),
    place: "Paris",
    experienceRequired: "3 ans",
}
