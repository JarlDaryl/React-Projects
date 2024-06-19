// 08- Online Shop
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import { CartContext } from './store/shoppingCartContext.jsx';
import CartContextProvider from './store/shoppingCartContext.jsx';

function App() {

  return (
    <CartContextProvider >
      <Header />
      <Shop >
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
