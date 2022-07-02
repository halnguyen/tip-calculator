import React from 'react';
import { TipButton } from '../Buttons/TipButton.jsx';
import { CustomButton } from '../Buttons/CustomButton.jsx';

export const SelectTipContainer = ({
	setTipButton,
	tipButton,
	setTipPercentage
}) => {

	return (
		<div className="tip-button-container">
			<p>Select Tip %</p>
			<div className="tip-button">
				<TipButton
					activeButton={tipButton}
					setActiveButton={setTipButton}
					setTipPercentage={setTipPercentage}
				/>
				<CustomButton
					setTipPercentage={setTipPercentage}
					setActiveButton={setTipButton}
				/>
			</div>
		</div>
	);
};


