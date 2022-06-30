import React, { useState } from 'react';
import { InputField } from '../InputField/InputField.jsx';
import { SelectTipContainer } from './SelectTipContainer.jsx';
import { OutputContainer } from './OutputContainer.jsx';


export const MainContainer = props => {
	return (
			<div className={props.className}>
				<section><InputField type="bill" label="Bill" /></section>
				<section><SelectTipContainer /></section>
				<section><InputField type="person" label="Number of People" /></section>
				<section className="output-container"><OutputContainer /></section>
			</div>
	);
};
