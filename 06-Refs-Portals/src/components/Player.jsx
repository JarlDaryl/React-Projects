import { useState, useRef } from 'react';

export default function Player() {
	const playerName = useRef();

	const [enteredPlayerName, setEnteredPlayerName] = useState('');

	function handleClick() {
		 setEnteredPlayerName(playerName.current.value);
     playerName.current.value = ''; //Clears the input field after the state has been updated
	}

	return (
		<section id='player'>
			<h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
			<p>
				<input
					ref={playerName}
					type='text'
				/>
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}