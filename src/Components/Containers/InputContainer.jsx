import React, { useState } from 'react';
import { InputField } from '../InputField/InputField.jsx';
import { SelectTipContainer } from './SelectTipContainer.jsx';
import { OutputContainer } from './OutputContainer.jsx';


export const InputContainer = ({
	tipButton,
	setTipButton,
	bill,
	setBill,
	setPerson,
	setTipPercentage,
	className
}) => {
	return (
		<div className={className}>

			<section className="input--bill">
				<InputField
					setPerson={setPerson}
					bill={bill}
					setBill={setBill}
					inputType="bill"
					label="Bill"
				/>
			</section>

			<section className="input--tip">
				<SelectTipContainer
					tipButton={tipButton}
					setTipButton={setTipButton}
					setTipPercentage={setTipPercentage}
				/>
			</section>

			<section className="input--person">
				<InputField
					setPerson={setPerson}
					inputType="person"
					label="Number of People"
				/>
			</section>

		</div>
	);
};
