import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data-with-examples.js';

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

	const handleSelect = (selectedButton) => {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
	};

	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concept</h2>
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />{' '}
						{/*Esta es la forma corta con el spread operator. Hace exactamente lo mismo que la linea de abajo pero con mucho menos codigo. */}
						<CoreConcept
							title={CORE_CONCEPTS[3].title}
							description={CORE_CONCEPTS[3].description}
							image={CORE_CONCEPTS[3].image}
						/>
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onSelect={() => handleSelect('components')}
							children='Components'
						/>{' '}
						{/*Esta es la forma larga de hacerlo. */}
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => handleSelect('jsx')}
						>
							{' '}
							JSX{' '}
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => handleSelect('props')}
						>
							{' '}
							Props{' '}
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => handleSelect('state')}
						>
							State
						</TabButton>
					</menu>

					{!selectedTopic ? (
						<p>Please select a topic.</p>
					) : (
						<div id='tab-content'>
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
