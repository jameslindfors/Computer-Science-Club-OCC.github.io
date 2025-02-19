import "./about.css";
import { faker } from "@faker-js/faker";

function About() {
	// Demo images
	const imageList = [
		faker.image.nature(),
		faker.image.sports(),
		faker.image.transport(),
	];

	return (
		<div className="about-container">
			<h1>About Us</h1>
			<div className="about-grid">
				<div className="about-item right">
					<div className="about-image">
						<img src={imageList[0]} alt="text" />
					</div>
				</div>
				<div className="about-item">
					<div className="about-text">
						<h1>Who are we</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco
						</p>
					</div>
				</div>
			</div>
			<div className="about-grid">
				<div className="about-item">
					<div className="about-image">
						<img src={imageList[1]} alt="text" />
					</div>
				</div>
				<div className="about-item right">
					<div className="about-text">
						<h1>What we do</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco
						</p>
					</div>
				</div>
			</div>
			<div className="about-grid">
				<div className="about-item right">
					<div className="about-image">
						<img src={imageList[2]} alt="text" />
					</div>
				</div>
				<div className="about-item">
					<div className="about-text">
						<h1>How we meet</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
