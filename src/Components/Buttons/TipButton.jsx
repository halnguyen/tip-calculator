import React from 'react';

export const TipButton = ({ activeButton, setActiveButton }) => {

	const getTipButton = () => {
		const tipAmounts = [
			{content: "5%", value: 0.05},
			{content: "10%", value: 0.1},
			{content: "15%", value: 0.15},
			{content: "25%", value: 0.25},
			{content: "50%", value: 0.5},
		];

		const handleClick = ({target}) => {
			setActiveButton(prevButton => prevButton = Number(target.value));
		};

		return tipAmounts.map((tip, index) => {
			return (
				<button
					key={index}
					value={tip.value}
					onClick={handleClick}
					// className={Number(tip.value) === activeButton ? "btn--active" : null}
					style={Number(tip.value) === activeButton ? styles : null }
				>
					{tip.content}
				</button>
			);
		});

	};

	return (
		<> {getTipButton()} </>
	);
};

const styles = {
	backgroundColor: 'hsl(172, 67%, 45%)',
	color: "hsl(183, 100%, 15%)" 
};
