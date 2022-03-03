import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom"
export default function Signup() {
    const emailChangeHandler = (e) => {}
    const passwordChangeHandler = () => {}
    const confirmPasswordChangeHandler = (e) => {}
    const signupHandler = (e) => {}
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
                        />
                        <input
                            className="form-input"
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Prénom"
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
                                Condition Générales d'utilisation
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
