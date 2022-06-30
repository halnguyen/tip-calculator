import React from 'react';


export const OutputField = props => {
	return (
		<div style={styles.div}>
			<div style={styles.tip}>
				{props.outputLabel} <span style={styles.span}>/ person</span>
			</div>

			<div style={styles.total}>${props.outputAmount}</div>
		</div>
	);
};


const styles = {
	div: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		lineHeight: 1.3 ,
	},
	tip: {
		display: 'flex',
		flexFlow: 'column nowrap',
		color: 'var(--white)',
	},
	total: {
		color: 'var(--strong-cyan)',
		fontSize: '1.7em',
		textAlign: 'right',
	},
	span: {
		color: 'var(--grayish-cyan)',
		fontSize: '0.8em',
	}
};
