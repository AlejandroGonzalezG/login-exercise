import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const estiloBoton = {
    textAlign: "webkit-center",
    width: "35%"
}

const Login = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (store.currentUser !== null) history.push('/');
    }, [store])

    return (
        <>
            <div className="login">
                <h1>Login</h1>
                <form className="formulario m-5" onSubmit={(e) => actions.handleLogin(e, history)}>
                    <input type="text" className="form-control" id="staticEmail" name="email" value={store.email} onChange={actions.handleChange} placeholder="Username" style={estiloBoton} />
                    <input placeholder="Password" type="password" className="form-control" id="inputPassword" name="password" value={store.password} onChange={actions.handleChange} style={estiloBoton} />
                    <button type="submit" className="btn btn-primary btn-block btn-large" style={estiloBoton}>
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;