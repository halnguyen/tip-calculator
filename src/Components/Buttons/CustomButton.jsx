import React from 'react';

export const CustomButton = ({
	setTipPercentage,
	setActiveButton
}) => {

	const handleInput = ({ target }) => {
		setTipPercentage(() => Number(target.value) / 100);
	};

	const handleFocus = () => setActiveButton(() => null);

	return (
		<>
			<input
				onChange={handleInput}
				onFocus={handleFocus}
				className="custom-button"
				type="number"
				placeholder="Custom"
			/>
		</>
	);
};
