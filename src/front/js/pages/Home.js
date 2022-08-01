import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-bs-ride="true"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to={0}
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				/>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to={1}
					aria-label="Slide 2"
				/>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="https://i.ytimg.com/vi/tLIRcS3rVRk/maxresdefault.jpg" alt="..." />
				</div>
				<div className="carousel-item">
					<img src="https://fondosmil.com/fondo/30944.jpg" alt="..." />
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Home;
