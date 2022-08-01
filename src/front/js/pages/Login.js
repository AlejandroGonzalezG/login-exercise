import React from "react";

const estiloBoton = {
    textAlign: "center",
    marginTop: "40px"
}

const estiloLabel = {
    textAlign: "end"
}

const Login = () => {
    return (
        <>
            <form className="formulario m-5"onSubmit={(e) =>  actions.handleLogin(e, history)}>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label" style={estiloLabel}>
                        Email:
                    </label>
                    <div className="col-9">
                        <input type="text" className="form-control" id="staticEmail" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label" style={estiloLabel}>
                        Password:
                    </label>
                    <div className="col-9">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="boton" style={estiloBoton} >
                    <button type="submit" className="btn btn-primary gap-2 w-1">
                        Login
                    </button>
                </div>
            </form>
        </>
    )
}

export default Login;