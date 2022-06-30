import React from 'react';

export const TipButton = ({
	setTipButton,
	value,
	key,
	content
}) => {
	return (
		<>
			<button
				onClick={setTipButton}
				style={styles}
				value={value}
			>
				{content}
			</button>
		</>
	);
};

const styles = {
	backgroundColor: 'var(--very-dark-cyan)',
	color: 'var(--white)',
	border: 'none',
	borderRadius: 5,
	textAlign: 'center'
};

