import React from 'react';

import './Questions.css';
import Accordian from './Accordian';

function Questions() {
	return (
		<div className="questions section container">
			<div className="secHeading">
				<h3>Frequently Asked Questions</h3>
			</div>
			<div className="secContainer grid">
				<div className="accordian grid">
					{' '}
					<Accordian />
				</div>

				<div className="from">
					<div className="secHeading">
						<h4>Do You Have Any Specific Question?</h4>
						<p>
							Please fill the form below and aur dedicated team will get in
							touch with you
						</p>
					</div>
					<div className="formContent grid">
						<input type="email" placeholder="Enter Your Email Address" />
						<textarea placeholder="Enter Your Question Here" />
						<button className="btn"> Submit Inquiry</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Questions;
