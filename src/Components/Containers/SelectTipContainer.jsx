import React from 'react';
import { TipButton } from '../Buttons/TipButton.jsx';

export const SelectTipContainer = props => {

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
				value={tip.value}
				key={index}
				content={tip.content}
			/>;
		})
	};

	return (
		<div className="tip-button-container">
			<p>Select Tip %</p>
			<div className="tip-button">
				{getTipButton()}
			</div>
		</div>
	);
};


