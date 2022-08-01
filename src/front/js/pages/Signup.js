import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext, useEffect } from "react";


const estiloBoton = {
    textAlign: "center",
    marginTop: "40px"
}

const estiloLabel = {
    textAlign: "end"
}

const Signup = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    useEffect(() => {

    }, [])

    useEffect(() => {
        if (store.currentUser !== null) history.push('/');
    }, [store])

    return (
        <>
            <form className="formulario m-5" onSubmit={(e) => actions.handleRegister(e, history)}>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label" style={estiloLabel}>
                        Email:
                    </label>
                    <div className="col-9">
                        <input type="text" className="form-control" id="email" name="email" value={store.email} onChange={actions.handleChange} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label" style={estiloLabel}>
                        Password:
                    </label>
                    <div className="col-9">
                        <input type="password" className="form-control" id="password" name="password" value={store.password} onChange={actions.handleChange} />
                    </div>
                </div>
                <div className="boton" style={estiloBoton} >
                    <button type="submit" className="btn btn-primary gap-2 w-1">
                        Registrarte
                    </button>
                </div>
            </form>
        </>
    )
}

export default Signup;