import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import './Reviews.css';
import client1 from '../../assets/client1.jpg';
import client2 from '../../assets/client2.jpg';
import client3 from '../../assets/client3.jpg';
import client4 from '../../assets/client4.jpg';
import travelGirl from '../../assets/travelGirl.jpg';

function Reviews() {
	return (
		<div className="review section container">
			<div className="secContainer grid">
				<div className="textDiv">
					<span className="redText">FROM OUR CLIENTS</span>
					<h3>Real Travel History From Our Beloved Clients</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
						eligendi harum enim autem facilis expedita, beatae soluta numquam
						distinctio voluptas?
					</p>
					<span className="stars flex">
						<AiFillStar className="icon" />
						<AiFillStar className="icon" />
						<AiFillStar className="icon" />
						<AiFillStar className="icon" />
						<AiFillStar className="icon" />
					</span>
					<div className="clientImages flex">
						<img src={client1} alt="Client Image" />
						<img src={client2} alt="Client Image" />
						<img src={client3} alt="Client Image" />
						<img src={client4} alt="Client Image" />
					</div>
				</div>

				<div className="imgDiv">
					<img src={travelGirl} alt="Travel Girl" />
				</div>
			</div>
		</div>
	);
}

export default Reviews;
