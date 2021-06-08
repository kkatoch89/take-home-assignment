import './App.css';
import React from 'react';

function App() {
	const [textInput, setTextInput] = React.useState(
		'Here is some example text.'
	);
	const [textOutput, setTextOutput] = React.useState('');

	// 2. Track the radio button's state through useState hook
	const [transformType, setTransformType] = React.useState('toUpperCase');

	const handleChangeRadio = (event) => {
		setTransformType(event.target.value);
	};

	const handleChangeText = (event) => {
		setTextInput(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// 3. Depending on whether uppercase or lowercase is selected, transform text
		switch (transformType) {
			case 'toUpperCase':
				return setTextOutput(textInput.toUpperCase());
			case 'toLowerCase':
				return setTextOutput(textInput.toLowerCase());
			default:
				return null;
		}
	};

	return (
		<div className="App">
			{console.log(transformType)}
			<header>
				<h1>Career Lab | Take-Home Assignment</h1>
			</header>
			<form onSubmit={handleSubmit}>
				{/* 1. Add 2 radio buttons to the form for 'uppercase' & 'lowercase' */}
				<fieldset>
					<legend>Transform text</legend>
					<input
						type="radio"
						id="to-uppercase"
						name="transform"
						value="toUpperCase"
						checked={transformType === 'toUpperCase'}
						onChange={handleChangeRadio}
					/>
					<label htmlFor="to-uppercase">uppercase</label>
					<input
						type="radio"
						id="to-lowercase"
						name="transform"
						value="toLowerCase"
						checked={transformType === 'toLowerCase'}
						onChange={handleChangeRadio}
					/>
					<label htmlFor="to-lowercase">lowercase</label>
				</fieldset>
				<label>
					<textarea onChange={handleChangeText} value={textInput} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<div id="result">{textOutput}</div>
		</div>
	);
}

export default App;
