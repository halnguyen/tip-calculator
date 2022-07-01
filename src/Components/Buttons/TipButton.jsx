import React from 'react';

export const TipButton = ({
	setTipButton,
	value,
	id,
	content
}) => {
	return (
		<>
			<button
				onClick={setTipButton}
				value={value}
				key={id}
			>
				{content}
			</button>
		</>
	);
};

