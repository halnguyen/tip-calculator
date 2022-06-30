import React from 'react';
import { OutputField } from '../OutputField/OutputField.jsx';

export const OutputContainer = props => {
	return (
		<>
			<OutputField outputLabel="Tip Amount" outputAmount={45}/>
			<OutputField outputLabel="Total" outputAmount={12} />
			<button style={styles.button}>Reset</button>
		</>
	);
};

const styles = {
	button: {
		outline: 'none',
		backgroundColor: 'var(--strong-cyan)',
		color: 'var(--very-dark-cyan)',
		border: 'none',
		borderRadius: 4,
		fontSize: '1.2em',
		height: '70%',
		alignSelf: 'end',
	},
};
