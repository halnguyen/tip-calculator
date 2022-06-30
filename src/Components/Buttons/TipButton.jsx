import React from 'react';

export const TipButton = props => {
	return (
		<>
			<button style={styles} value={props.value}>{props.content}</button>
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

