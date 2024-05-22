import React from 'react'
import TabButton from './TabButton'
import { useState } from 'react'
import { EXAMPLES } from '../data-with-examples'

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

	const handleSelect = (selectedButton) => {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
	};

    let tabContent = <p>Click on a tab to see examples.</p>;

    if (selectedTopic) {
        tabContent= (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
    }

  return (
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

					{tabContent}

				</section>
  )
}
