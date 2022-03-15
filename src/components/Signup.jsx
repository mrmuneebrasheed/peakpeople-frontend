import { useState } from "react"
import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import api from "../redux/api"

export default function Signup() {
    const { id } = useSelector((state) => state.userStore)
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [showError, setShowError] = useState(false)

    const firstNameChangeHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lastNameChangeHandler = (e) => {
        setLastName(e.target.value)
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordChangeHandler = (e) => {
        setConfirmPassword(e.target.value)
    }
    const signupHandler = (e) => {
        e.preventDefault()
        if (email !== "" && password === confirmPassword)
            api.post("/connection/signup", {
                firstName,
                lastName,
                email,
                password,
            })
                .then((res) => {
                    console.log(res)
                    navigate("/")
                })
                .catch((err) => {
                    // console.log(err.response.data.message)
                    setErrorMessage(err.response.data.message)
                    setShowError(true)
                })
    }
    return (
        <div className="login-page flex-row">
            <div className="login-left flex-column">
                <img className="login-logo" src={logo} alt="logo" />
                <p>
                    <span className="peak blue">Peak </span>
                    <span className="people blue">People</span>
                </p>
            </div>
            <div className="login-right flex-column">
                <form
                    onSubmit={signupHandler}
                    className="login-form flex-column"
                >
                    <div className="login-line">
                        <h2 className="form-heading blue">
                            Bienvenue sur Peak People
                        </h2>
                        <p>
                            Inscrivez-vous pour poursuivre. Si vous avez déjà un
                            compte, &nbsp;
                            <Link className="link pink" to="/">
                                Connectez-vous
                            </Link>
                        </p>
                    </div>
                    <div className="flex-row justify-between">
                        <input
                            className="form-input"
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Nom"
                            onChange={lastNameChangeHandler}
                        />
                        <input
                            className="form-input"
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Prénom"
                            onChange={firstNameChangeHandler}
                        />
                    </div>
                    <input
                        className="form-input"
                        placeholder="Address email"
                        autoComplete="none"
                        type="text"
                        name="email"
                        id="email"
                        onChange={emailChangeHandler}
                    />
                    <input
                        className="form-input"
                        placeholder="Mot de Passe"
                        type="password"
                        name="password"
                        id="password"
                        onChange={passwordChangeHandler}
                    />
                    <input
                        className="form-input"
                        placeholder="Confirmer Mot de Passe"
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={confirmPasswordChangeHandler}
                    />
                    {showError && <p className="pink">{errorMessage}</p>}
                    <div className="flex-row justify-between">
                        <div>
                            <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                            />
                            <label htmlFor="remember">
                                J'accepte les &nbsp;
                            </label>
                            <span className="pink link">
                                Conditions Générales d'utilisation
                            </span>
                        </div>
                    </div>
                    <button className="pink-button submit-button" type="submit">
                        &#60; Inscription &#62;
                    </button>
                </form>
            </div>
        </div>
    )
}
