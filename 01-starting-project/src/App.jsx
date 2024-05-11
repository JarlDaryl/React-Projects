import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	const description = reactDescriptions[genRandomInt(2)];

	return (
		<header>
			<img src={reactImg} alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}

function CoreConcept({ image, title, description }) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}

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
