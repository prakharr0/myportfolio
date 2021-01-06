import React from 'react'
import '../My_Css/Navbar.css'

const Navbar = () => {
    return (
        
	<nav className="navbar bg-light navbar-light navbar-expand-lg sticky-top">
		<div className="container">
			<a href="#header" className="navbar-brand nav-link"><p>Prakhar Rathi</p></a>

			<button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarResponsive">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item"><a href="#introduction-about" className="nav-link">ABOUT</a></li>
					<li className="nav-item"><a href="#education-me" className="nav-link">EDUCATION</a></li>
                    <li className="nav-item"><a href="#skills-me" className="nav-link">SKILLS</a></li>
					<li className="nav-item"><a href="#experience-me" className="nav-link">EXPERIENCE</a></li>
					<li className="nav-item"><a href="#contact-me" className="nav-link">CONTACT</a></li>
				</ul>
			</div>
		</div>
	</nav>
    
    )
}

export default Navbar
