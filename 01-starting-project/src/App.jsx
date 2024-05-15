import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
	const handleSelect = (selectedButton) => {
        console.log(selectedButton);
    };

	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core Concept</h2>
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0]}/>
						<CoreConcept {...CORE_CONCEPTS[1]}/>
						<CoreConcept {...CORE_CONCEPTS[2]}/> {/*Esta es la forma corta con el spread operator. Hace exactamente lo mismo que la linea de abajo pero con mucho menos codigo. */}

						<CoreConcept
						title={CORE_CONCEPTS[3].title}
						description={CORE_CONCEPTS[3].description}
              			image={CORE_CONCEPTS[3].image}
						/>
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleSelect('Components')} children="Components"/> {/*Esta es la forma larga de hacerlo. */}
						<TabButton onSelect={() => handleSelect('JSX')}> JSX </TabButton>
						<TabButton onSelect={() => handleSelect('Props')}> Props </TabButton> 
						<TabButton onSelect={() => handleSelect('State')}>State</TabButton>
					</menu>

				</section>
			</main>
		</div>
	);
}

export default App;
