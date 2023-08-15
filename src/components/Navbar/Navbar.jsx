import React from 'react';
import { GiRose } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

import './Navbar.css';

function Navbar() {
	return (
		<div className="navBar">
			<div className="logoDiv">
				<GiRose className="icon" />
				<span>Raj Rose</span>
			</div>

			<div className="menu">
				<ul>
					<li className="navList">Destination</li>
					<li className="navList">About Us</li>
					<li className="navList">Testimonial</li>
					<li className="navList">Gallery</li>
				</ul>
				<AiFillCloseCircle className="icon" />
			</div>

			<button className="btn signUpBtn">Sign Up</button>
			<PiDotsNineBold className="icon" />
		</div>
	);
}

export default Navbar;
