import React, { useState } from 'react';
import { InputField } from '../InputField/InputField.jsx';
import { SelectTipContainer } from './SelectTipContainer.jsx';
import { OutputContainer } from './OutputContainer.jsx';


export const InputContainer = ({
	setTipButton,
	setTipPercentage,
	setPerson,
	className
}) => {
	return (
		<div className={className}>

			<section className="input--bill">
				<InputField type="bill" label="Bill" />
			</section>

			<section className="input--tip">
				<SelectTipContainer setTipButton={setTipButton} />
			</section>

			<section className="input--person">
				<InputField type="person" label="Number of People" />
			</section>

		</div>
	);
};
