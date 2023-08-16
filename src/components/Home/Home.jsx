import React from 'react';
import { AiOutlineSwapRight } from 'react-icons/ai';

import './Home.css';
import Video from '../../assets/video.mp4';
import destination1 from '../../assets/destination1.jpg';
import destination2 from '../../assets/destination2.jpg';
import destination3 from '../../assets/destination3.jpg';
import destination4 from '../../assets/destination4.jpg';

function Home() {
	return (
		<div className="Home">
			<div className="videoBg">
				<video src={Video} autoPlay loop muted></video>
			</div>

			<div className="sectionText">
				<h1> Unlock Your Travel Dreams With Us!</h1>
				<p>
					Discover the world's most adventurous nature, life is so short for a
					trip
				</p>
				<button className="btn flex">
					GET STARTED <AiOutlineSwapRight className="icon" />
				</button>
			</div>

			<div className="popularPlaces">
				<div className="content">
					<h3>Popular Places</h3>
					<div className="images flex">
						<img src={destination1} alt="Destination Image" />
						<img src={destination2} alt="Destination Image" />
						<img src={destination3} alt="Destination Image" />
						<img src={destination4} alt="Destination Image" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
