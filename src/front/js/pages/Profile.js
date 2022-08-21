import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";


const estiloBoton2 = {
    marginLeft: "10px"
}

const estiloBoton3 = {
    height: "40px"
}

const estiloBoton4 = {
    fontSize: "17px"
}

const estiloh1 = {
    marginBottom: "30px"
}


const Profile = () => {
    const { store, actions } = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        actions.loadProfile();
    }, [])

    useEffect(() => {
        if (store.currentUser === null) history.push('/login');
    }, [store])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <form className="m-5" style={{ width: '450px' }} onSubmit={(e) => actions.handleProfile(e)}>
                        <div>
                            <h1 style={estiloh1}>My Profile</h1>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                                <strong>Email:</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" name="email" value={store.email} onChange={actions.handleChange} style={estiloBoton2} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                <strong>Password:</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password" name="password" value={store.password} onChange={actions.handleChange} style={estiloBoton2} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                <strong> Name:</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="name" name="name" value={store.name} onChange={actions.handleChange} style={estiloBoton2} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                <strong>Phone:</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="phone_number" name="phone_number" value={store.phone_number} onChange={actions.handleChange} style={estiloBoton2} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                <strong>Instagram:</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="instagram" name="instagram" value={store.instagram} onChange={actions.handleChange} style={estiloBoton2} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                <strong>Facebook:</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="facebook" name="facebook" value={store.facebook} onChange={actions.handleChange} style={estiloBoton2} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                <strong>Twitter:</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="twitter" name="twitter" value={store.twitter} onChange={actions.handleChange} style={estiloBoton2} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                <strong>Github:</strong>
                            </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="github" name="github" value={store.github} onChange={actions.handleChange} style={estiloBoton2} />
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary gap-2" style={estiloBoton3}>
                                <strong style={estiloBoton4}>Update Profile</strong>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Profile;