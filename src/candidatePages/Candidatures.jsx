import React, { useEffect } from "react"
import "../assets/css/Candidatures.css"
import { useSelector, useDispatch } from "react-redux"
import CandidatureCard from "../components/CandidatureCard"
import { userActions } from "../redux/userSlice"
import { uiActions } from "../redux/uiSlice"
import api from "../redux/api"

export default function Candidatures() {
    const { jobCandidatures, id } = useSelector((state) => state.userStore)
    const dispatch = useDispatch()
    useEffect(() => {
        api.get("/user/get-candidatures/" + id)
            .then((res) => {
                console.log(res.data)
                dispatch(userActions.setJobCandidatures(res.data.candidatures))
            })
            .catch((err) =>
                dispatch(uiActions.setModalMessage(err.response.message))
            )
    }, [])

    return (
        <div className="candidatures-page">
            <div className="header flex-row justify-between">
                <span className="title">{`Mes candidatures(${jobCandidatures?.length})`}</span>
                <select className="filter-option" name="" id="">
                    <option value="">Tier par</option>
                </select>
            </div>
            {jobCandidatures ? (
                <div>
                    {jobCandidatures?.map((job) => (
                        <CandidatureCard
                            key={job._id}
                            id={job.job._id}
                            title={job.job.title}
                            enterprise={job.job.enterprise}
                            date={job.job.date}
                            status={job.status}
                            small={false}
                        />
                    ))}
                </div>
            ) : (
                <div>No Candidatures</div>
            )}
        </div>
    )
}
