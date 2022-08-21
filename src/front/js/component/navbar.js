import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context)
	const history = useHistory();

	useEffect(() => {

	}, [])

	useEffect(() => {
		if (store.currentUser === null) history.push('/login');
	}, [store.currentUser])

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					MyBlog.com
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-link" to="/profile">
							My Profile
						</Link>
						{
							!!store.currentUser ?
								(
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
											{store.currentUser?.user?.profile?.name || store.currentUser?.user?.email}
										</a>
										<ul className="dropdown-menu">
											<li><a className="dropdown-item" href="#">Action</a></li>
											<li><a className="dropdown-item" href="#">Another action</a></li>
											<li><a className="dropdown-item" href="#">Something else here</a></li>
											<li><hr className="dropdown-divider" /></li>
											<li><button className="dropdown-item" onClick={() => actions.handleLogout()}>Logout</button></li>
										</ul>
									</li>
								) : (
									<>
										<li className="nav-item">
											<Link className="nav-link" to="/login">Login</Link>
										</li>
										<li className="nav-item">
											<Link className="nav-link" to="/register">Register</Link>
										</li>
									</>
								)
						}
					</div>
				</div>
			</div>
		</nav>
	);
};
