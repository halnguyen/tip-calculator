import React from 'react';
import './InputField.css';

export const InputField = props => {

	return (
		<>
			<form className={props.type} action="" style={styles.form}>
				<label htmlFor={props.type}>{props.label}</label>
				<input
					id={props.type}
					style={styles.input}
					className={props.type}
					type="number"
					min={0}
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
