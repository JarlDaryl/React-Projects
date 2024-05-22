import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import { Fragment } from 'react';
import Examples from './components/Examples.jsx';


function App() {
	return (
		<>{/*De esta forma no creamos un Div extra en el Dom, forma simplificada de usar Fragment */}
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
