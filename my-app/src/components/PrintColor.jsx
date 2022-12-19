import { useState } from 'react';

export const PrintColor = () => {
	const [color, setColor] = useState('No color');
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setColor(inputValue);
	};

	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						onChange={(e) => {
							setInputValue(e.target.value);
							console.log(e.target);
						}}
						value={inputValue}
					/>
					<button type='submit'>Change</button>
				</form>
			</div>
			<p>{color}</p>
		</>
	);
};
