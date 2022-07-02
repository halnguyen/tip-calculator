import React from 'react';
import './InputField.css';

export const InputField = ({
	setBill, 
	type, 
	label,
}) => {

	const handleBill = ({ target }) => {
		const { value } = target;
		setBill(() => Number(value));
	};

	return (
		<>
			<form className={type} action="" >
				<label htmlFor={type}>{label}</label>
				<input
					id={type}
					className={type}
					type="number"
					min={0}
					onInput={handleBill}
					required />
			</form>
		</>
	);
};


const styles = {
	form: {
		display: 'flex',
		flexFlow: 'column nowrap',
		flex: 1,
		width: '100%',
	},
	input: {
		textAlign: 'right',
		padding: '0 0.5em',
		outline: 'none',
		border: 'none',
		backgroundColor: 'var(--very-light-grayish-cyan)',
		borderRadius: 5,
		margin: '5px 0',
	}
};
