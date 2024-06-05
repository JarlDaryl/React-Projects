import { useState } from 'react';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = () => {
		setIsEditing((editing) => !editing);
		
		if(isEditing) {
			onChangeName(symbol, playerName)
		}
	};

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span className='player-name'>{playerName}</span>
	//let buttonCapttion = 'Edit';

	if ( isEditing ) {
		editablePlayerName = <input type='text' required value={playerName} onChange={handleChange}/>
		//buttonCapttion = 'Save';
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className='player'>
					<div>
						{editablePlayerName}
						<span className='player-symbol'>{symbol}</span>
						<button onClick={handleEdit} >{isEditing ? 'Save' : 'Edit'}</button>
					</div>
			</span>
		</li>
	);
}
