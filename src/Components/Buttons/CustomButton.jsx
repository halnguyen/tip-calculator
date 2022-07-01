import React from 'react';

export const CustomButton = props => {

	// const onFocus = event => {};

	// useEffect(() => {
	// 	const button = document.querySelector(".custom-button");
	// 	button.addEventListener(''
	// });

	return (
		<>
			<input
				onChange={(event) => {console.log(event.target.value)}}
				className="custom-button"
				type="number"
				placeholder="Custom"
			/>
		</>
	);
};
