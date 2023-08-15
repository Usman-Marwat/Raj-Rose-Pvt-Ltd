import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

function Accordian() {
	return (
		<div className="accordianContainer">
			<span className="title">
				Ho do I choose the right travel destination for me?
				<span>
					<BsArrowDownCircle className="icon" />
				</span>
			</span>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe pariatur
				ea architecto est laudantium dignissimos totam quae itaque a impedit.
			</p>
		</div>
	);
}

export default Accordian;
