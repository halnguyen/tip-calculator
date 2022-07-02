import React, { useEffect } from 'react';
import './InputField.css';

export const InputField = ({
	bill,
	setBill,
	setPerson,
	inputType,
	label,
}) => {

	const handleInput = ({ target }) => {
		const { value } = target;
		if (inputType === "bill") {
			setBill(() => Number(value));
		} else {
			setPerson(() => Number(value));
		}
	};

	let output;
	useEffect(() => {
		output = bill > 0 ? bill : undefined;
	}, [bill]);

	return (
		<>
			<form className={inputType} action="" >
				<label htmlFor={inputType}>{label}</label>
				<input
					id={inputType}
					className={inputType}
					type="number"
					min={0}
					onInput={handleInput}
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
