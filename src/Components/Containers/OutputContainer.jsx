import React from 'react';
import { OutputField } from '../OutputField/OutputField.jsx';

export const OutputContainer = ({ tipTotal, tipAverage, onResetClick }) => {
	return (
			<section className="output">
				<OutputField outputLabel="Tip Amount" outputAmount={tipTotal}/>
				<OutputField outputLabel="Total" outputAmount={tipAverage} />
				<button style={styles.button} onClick={onResetClick}>Reset</button>
			</section>
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
