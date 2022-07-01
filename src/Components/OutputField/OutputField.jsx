import React from 'react';


export const OutputField = props => {
	return (
		<div class="output-content">

			<div className="output--label">
				{props.outputLabel} <span>/ person</span>
			</div>

			<div className="output--amount">${props.outputAmount}</div>

		</div>
	);
};


