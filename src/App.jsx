import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./App.css";

const App = () => {
	const [isOpen, setIsOpen] = useState(true);
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			offset: 120,
		});
	}, []);

	return (
		<div className="Portfolio-container">
			{/* Navbar Section */}
			<div className="Navbar-row">
				<div className="Navbar fixed-top col  col-12-md ">
					<div className="Nav-logo-div">
						<img className="Nav-logo" src="/logo.jpg" alt="Logo" />
					</div>
					<ul className={isOpen ? "desk-menu" : "mob-menu"}>
						<li>
							<a className="Menu-link" href="#Home">
								Home
							</a>
							<a className="Menu-link" href="#About">
								About
							</a>
							<a className="Menu-link" href="#Project">
								Projects
							</a>
							<a className="Menu-link" href="#Skill">
								Skills
							</a>

							<a className="Menu-link" href="#Contact">
								Contact
							</a>
						</li>
					</ul>
					<button onClick={(e) => setIsOpen(!isOpen)} className="Burger">
						<i class="fa-solid fa-burger"></i>
					</button>
				</div>
			</div>
			{/* HOME */}
			<div className="Home-row row" id="Home">
				<div className="Home col-12  col-md-6 order-2 order-xs-1 order-lg-1">
					<div className="Intro-div" data-aos="fade-right">
						<p className="First-cap">
							Hey there! Welcome to my creative world 🌍
						</p>
						<div className="Two-cap">
							<p className="Second-cap">I'm </p>
							<p className="Samrat">Samrat</p>
						</div>

						<p className="Third-cap">
							A frontend developer who loves building clean and simple websites
						</p>
						<div className="Mail-div-button">
							<button className="Cv-button">
								<a href="/SamratBhattarai.pdf" className="Cv-link">
									View Cv
								</a>
							</button>
						</div>
					</div>
				</div>
				<div className="Home col-12 col-md-6 order-1 order-xs-2 order-lg-2">
					<div className="Port-div">
						<img
							src="/portfolio.jpg"
							data-aos="fade-left"
							className="Port-img"
							alt="photo"
						/>
					</div>
				</div>
			</div>
			{/* ABOUT */}
			<div className=" row About" id="About">
				<div className=" About-description ">
					<div className="About-img-div">
						<div>My Self</div>
						<img className="About-img" data-aos="flip-right" src="/About.jpg" />
					</div>
					<div className="About-myself">
						<p className="Myself" data-aos="flip-up">
							Welcome! I'm Samrat Bhattarai (Arjun in official documents). I'm
							someone who loves learning new things — from creating websites to
							exploring AI-generated videos, AI editing tools, and more.
						</p>
						<p className="Myself" data-aos="flip-up">
							I completed 3 years of Diploma in IT Engineering (DIT) from Kankai
							Polytechnic Institute, Jhapa, Nepal. Along with that, I’ve done a
							6-month Internship + Training at BackSpace Technology under the
							guidance of respected sir, and continued 3 months of
							self-learning.
						</p>
						<p className="Myself" data-aos="flip-up">
							So far, I've built several frontend projects using HTML, CSS,
							JavaScript, Bootstrap, and React — including E-Vehicle site,
							Cafe-Hub, W-Movie, Kapada Creation, and more. I'm always
							exploring, learning, and building something new.
						</p>
					</div>
				</div>
			</div>
			{/* Projects */}
			<div className="row Projects" id="Project">
				<div>
					<h2 className="Projects-head">Projects</h2>
				</div>
				<div className="Project-card">
					<card className="Card" data-aos="flip-up">
						<div>
							<img className="Projects-img" src="/Cafe-Hub.png" alt="Cafe" />
						</div>
						<div>
							<p className="Projects-title">Title:Cafe-Hub</p>
						</div>
						<div>
							<p className="Project-caption">
								Simple cafe app using only JavaScript (no React). Not fully
								responsive. You can increase/decrease quantity and like items.
							</p>
						</div>
					</card>
					<card className="Card" data-aos="flip-up">
						<div>
							<img className="Projects-img" src="/Cloths.png" alt="Cafe" />
						</div>
						<div>
							<p className="Projects-title">Title:Cloth Market</p>
						</div>
						<div>
							<p className="Project-caption">
								Clothing market site using React with routing and Redux Toolkit.
								Around 80% responsive. Cart and UI features working well.
							</p>
						</div>
					</card>
					<card className="Card" data-aos="flip-down">
						<div>
							<img className="Projects-img" src="/Movie.png" alt="Cafe" />
						</div>

						<div>
							<p className="Projects-title">Title:Movie Store</p>
						</div>
						<div>
							<p className="Project-caption">
								Movie store project made in React. Fetching API data with
								reusable components. Fully responsive and clean layout.
							</p>
						</div>
					</card>
				</div>
			</div>
			{/* SKILLS */}
			<div className=" row Skills" id="Skill">
				<div>
					<h2 className="Skill-title">Skills💡</h2>
					<p className="Skill-head">HTML</p>
					<div className="progress" data-aos="fade-left">
						<div
							className="progress-bar HTML"
							aria-valuenow="90"
							aria-valuemax="100"
							style={{ width: "90%" }}
						>
							90%
						</div>
					</div>
					<p className="Skill-head">CSS</p>
					<div className="progress" data-aos="fade-right">
						<div
							className="progress-bar CSS"
							aria-valuenow="80"
							aria-valuemax="100"
							style={{ width: "70%" }}
						>
							80%
						</div>
					</div>
					<p className="Skill-head">Bootstrap</p>
					<div className="progress" data-aos="fade-left">
						<div
							className="progress-bar BOOTSTRAP"
							aria-valuenow="60"
							aria-valuemax="100"
							style={{ width: "60%" }}
						>
							60%
						</div>
					</div>
					<p className="Skill-head">JAVASCRIPTS</p>
					<div className="progress" data-aos="fade-right">
						<div
							className="progress-bar JAVASCIPTS"
							aria-valuenow="75"
							aria-valuemax="100"
							style={{ width: "90%" }}
						>
							70%
						</div>
					</div>
					<p className="Skill-head">React</p>
					<div className="progress progress-bar-striped" data-aos="fade-left">
						<div
							className="progress-bar REACT"
							aria-valuenow="75"
							aria-valuemax="100"
							style={{ width: "90%" }}
						>
							75%
						</div>
					</div>
					<p className="Skill-head">React Testing (Vitest)</p>
					<div className="progress" data-aos="fade-right">
						<div
							role="progressbar"
							className="progress-bar REACT-TESTING "
							aria-valuenow="50"
							aria-valuemax="100"
							style={{ width: "50%" }}
						>
							50%
						</div>
					</div>
				</div>
			</div>
			{/* CONTACTS */}
			<div className="row Contact" id="Contact">
				<div className="Contact-form">
					<form
						action="https://formspree.io/f/meogawan"
						method="POST"
						className="Form-group"
					>
						<h2 className="Lets-connect">Lets Connect</h2>
						<input
							className="form-control"
							type="text"
							name="name"
							placeholder="Your Name"
							required
						/>
						<input
							className="form-control"
							type="email"
							name="email"
							placeholder="Your Email"
							required
						/>
						<textarea
							className="form-control"
							name="message"
							placeholder="Your Message"
							required
						></textarea>
						<button className="btn btn-primary mt-2" type="submit">
							Send Message
						</button>
					</form>
				</div>
			</div>
			<footer className="footer-container">
				<div className="footer-row">
					<div className="footer-col-3">
						<div className="Logo">
							<h2 className="Logo-h2">
								SAM <p className="X">-X</p>
							</h2>
						</div>
					</div>
					<div className="footer-col-3">
						<p className="copy-right">
							© 2025 Samrat (Arjun Bhattarai). Built with passion 💻
						</p>
					</div>
					<div className="footer-col-3">
						<a href="https://www.facebook.com/Samratbhattarai1.com.np/">
							<i className="fab fa-facebook-f icons"></i>
						</a>
						<a href="https://www.instagram.com/s_a_m___x?igsh=NmRzZmZkbThjb3Zo">
							<i class="fa-brands fa-instagram icons"></i>
						</a>
						<a href="https://facebook.com/yourpage">
							<i class="fa-brands fa-twitter icons"></i>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default App;
