import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext, useEffect, useState } from "react";
import PasswordRequisito from './PasswordRequisito';
import '../../styles/index.css'


const estiloBoton = {
    textAlign: "webkit-center",
    width: "35%"
}

const Signup = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();
    const [passRequisito, setPassRequisito] = useState(false);
    const [revisar, setRevisar] = useState({
        checkMayus: false,
        checkNumero: false,
        checkLargo: false,
        checkCaracterEspecial: false,
    })
    const handleOnFocus = () => {
        setPassRequisito(true);
    }

    const handleOnBlur = () => {
        setPassRequisito(false);
    }

    const checkValidation = () => {
        const checkMayus = /[A-Z]/.test(store.password);
        const checkNumero = /[0-9]/.test(store.password);
        const checkLargo = store.password.length >= 8;
        const checkCaracterEspecial = /[!@#$%&?¡*°]/.test(store.password);
        setRevisar({
            checkMayus,
            checkNumero,
            checkLargo,
            checkCaracterEspecial
        })
    };

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (store.currentUser === null) history.push('/register');
    }, [store])

    return (
        <>
            <div className="login">
                <h1>Register</h1>
                <form className="formulario m-5" onSubmit={(e) => actions.handleRegister(e, history)}>
                    <input type="text" className="form-control" id="email" name="email" value={store.email} onChange={actions.handleChange} placeholder="Username" style={estiloBoton} />
                    <input placeholder="Password" type="password" className="form-control" id="password" name="password" value={store.password} onChange={actions.handleChange} onFocus={handleOnFocus}
                        onBlur={handleOnBlur} onKeyUp={() => checkValidation()} style={estiloBoton} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&?¡*°]).{8,}" />
                    {passRequisito ? (
                        <PasswordRequisito
                            checkMayus={revisar.checkMayus ? "valid" : "invalid"}
                            checkNumero={revisar.checkNumero ? "valid" : "invalid"}
                            checkLargo={revisar.checkLargo ? "valid" : "invalid"}
                            checkCaracterEspecial={revisar.checkCaracterEspecial ? "valid" : "invalid"} />
                    ) : null}
                    <button type="submit" className="btn btn-primary btn-block btn-large" style={estiloBoton}>
                        Registrarte
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup;