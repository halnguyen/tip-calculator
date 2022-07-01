import React from 'react';
import { TipButton } from '../Buttons/TipButton.jsx';
import { CustomButton } from '../Buttons/CustomButton.jsx';

export const SelectTipContainer = ({ setTipButton }) => {

	// Generating tip buttons
	const getTipButton = () => {
		const tipAmount = [
			{content: "5%", value: 0.05},
			{content: "10%", value: 0.1},
			{content: "15%", value: 0.15},
			{content: "25%", value: 0.25},
			{content: "50%", value: 0.50},
		];

		return tipAmount.map((tip, index) => {
			return <TipButton
				setTipButton={setTipButton}
				value={tip.value}
				id={index}
				content={tip.content}
			/>;
		})
	};

	return (
		<div className="tip-button-container">
			<p>Select Tip %</p>
			<div className="tip-button">
				{getTipButton()}
				<CustomButton />
			</div>
		</div>
	);
};


