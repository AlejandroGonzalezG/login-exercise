import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import React from "react";

const Signup = () => {
    return (
        <>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            readOnly=""
                            className="form-control-plaintext"
                            id="staticEmail"
                            defaultValue="email@example.com"
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary gap-2 w-1">
                        Sign in
                    </button>
                </div>
            </form>
        </>
    )
}

export default Signup