import React from 'react';
import { OutputField } from '../OutputField/OutputField.jsx';

export const OutputContainer = ({ 
	bill,
	tipPercentage,
	person,
	onResetClick,
	className
}) => {
	
	const totalTipAmount = () => {
		if (person) return ( (bill * tipPercentage) / person ).toFixed(2);
		return (bill * tipPercentage).toFixed(2);
	};

	const totalBillAmount = () => {
		let total;
		if (person) {
			total = ( bill * (1 + tipPercentage) ) / person;
		} else {
			total = ( bill * (1 + tipPercentage) );
		}
		return total.toFixed(2);
	};

	return (
			<section className={className}>
				<div className="output-field">
					<OutputField outputLabel="Tip Amount" outputAmount={totalTipAmount()}/>
					<OutputField outputLabel="Total" outputAmount={totalBillAmount()} />
				</div>
				<button style={styles.button} onClick={onResetClick}>Reset</button>
			</section>
	);
};

const styles = {
	// button: {
	// 	outline: 'none',
	// 	backgroundColor: 'var(--strong-cyan)',
	// 	color: 'var(--very-dark-cyan)',
	// 	border: 'none',
	// 	borderRadius: 4,
	// 	fontSize: '1.2em',
	// 	height: '70%',
	// 	alignSelf: 'end',
	// },
};
