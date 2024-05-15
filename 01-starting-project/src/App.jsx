import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';


function App() {
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
			</main>
		</div>
	);
}

export default App;
