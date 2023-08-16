import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { BsFillCalendarDateFill, BsFillCreditCardFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';

import './Destinations.css';
import { destinations } from './data';

function Destinations() {
	return (
		<div className="destination section container">
			<div className="secContainer">
				<div className="secTitle">
					<span className="redText">EXPLORE NOW</span>
					<h3>Find Your Dream Destination</h3>
					<p>
						Fill in the fields below to find the best spot for your next tour
					</p>
				</div>

				<div className="searchField grid">
					<div className="inputField flex">
						<MdLocationPin className="icon" />
						<input type="text" placeholder="Location" />
					</div>
					<div className="inputField flex">
						<BsFillCreditCardFill className="icon" />
						<input type="text" placeholder="Budget" />
					</div>
					<div className="inputField flex">
						<BsFillCalendarDateFill className="icon" />
						<input type="text" placeholder="Date" />
					</div>
					<button className="btn flex">
						<BiSearchAlt className="icon" />
						Search
					</button>
				</div>

				<div className="secMenu">
					<ul className="flex">
						<li className="active">All</li>
						<li>Recommended</li>
						<li>Beach</li>
						<li>Park</li>
						<li>Nature</li>
						<li>Mountain</li>
					</ul>
				</div>

				<div className="destinationContainer grid">
					{destinations.map((destination) => (
						<div key={destination.id} className="singleDestination">
							<div className="imgDiv">
								<img src={destination.img} alt="Destination Image" />
								<div className="descInfo flex">
									<div className="text">
										<span className="name">{destination.name}</span>
										<p className="flex">
											<TiLocation className="icon" />
											{destination.location}
										</p>
									</div>
									<span className="rating">{destination.rating}</span>
								</div>
							</div>
						</div>
					))}
				</div>

				{/**/}
			</div>
		</div>
	);
}

export default Destinations;
