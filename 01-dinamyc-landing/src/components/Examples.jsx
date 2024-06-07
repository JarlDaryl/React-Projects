import React from 'react';
import TabButton from './TabButton';
import { useState } from 'react';
import { EXAMPLES } from '../data-with-examples';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	const handleSelect = (selectedButton) => {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
	};

	let tabContent = <p>Click on a tab to see examples.</p>;

	if (selectedTopic) {
		tabContent = (
			<div id='tab-content'>
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<Section title='Examples' id='examples'>
			<Tabs
				buttons={
					<>
						{' '}
						<TabButton
							isSelected={selectedTopic === 'components'}
							onClick={() => handleSelect('components')}
							children='Components'
						/>{' '}
						{/*Esta es la forma larga de hacerlo. */}
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onClick={() => handleSelect('jsx')}
						>
							{' '}
							JSX{' '}
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onClick={() => handleSelect('props')}
						>
							{' '}
							Props{' '}
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onClick={() => handleSelect('state')}
						>
							State
						</TabButton>
					</>
				}
			>
				{tabContent}
			</Tabs>
		</Section>
	);
}
