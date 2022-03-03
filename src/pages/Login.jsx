import { useState } from "react"
import "../assets/css/Login.css"
import store from "../redux/store"
import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }
    const loginHandler = (e) => {
        e.preventDefault()
        console.log(email, password)
        store.userStore.dispatch({
            type: "login",
            email: email,
            password: password,
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
                    onSubmit={loginHandler}
                    className="login-form flex-column"
                >
                    <div className="login-line">
                        <h2 className="form-heading blue">
                            Content de vous revoir
                        </h2>
                        <p>
                            Connectez-vous pour accéder votre compte. <br /> Si
                            vous n’avez pas de compte, &nbsp;
                            <Link className="link pink" to="/signup">
                                inscrivez-vous
                            </Link>
                        </p>
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
                    <div className="flex-row justify-between">
                        <div>
                            <input
                                className="checkbox"
                                type="checkbox"
                                name="remember"
                                id="remember"
                            />
                            <label htmlFor="remember">Rester Connecté</label>
                        </div>
                        <Link className="link pink" to="/forget-password">
                            Mot de passe oublié?
                        </Link>
                    </div>
                    <button className="pink-button submit-button" type="submit">
                        &#60; Connexion &#62;
                    </button>
                </form>
            </div>
        </div>
    )
}
