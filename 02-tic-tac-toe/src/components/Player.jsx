import { useState } from 'react';

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	const handleEdit = () => {
		setIsEditing((editing) => !editing);
	};

	let playerName = <span className='player-name'>{name}</span>
	//let buttonCapttion = 'Edit';

	if ( isEditing ) {
		playerName = <input type='text' required value={name}/>
		//buttonCapttion = 'Save';
	}

	return (
		<li>
			<span className='player'>
					<div>
						{playerName}
						<span className='player-symbol'>{symbol}</span>
						<button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
					</div>
			</span>
		</li>
	);
}
