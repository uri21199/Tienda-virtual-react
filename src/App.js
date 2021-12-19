import './App.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import Navbar from './containers/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactContainer from './containers/ContactContainer/ContactContainer';
import FooterContainer from './containers/FooterContainer/FooterContainer';
import HomePageContainer from './containers/HomePageContainer/HomePageContainer';
import CartContextProvider from './context/CartContext';
import CartView from './components/CartView/CartView';
import Checkout from './components/Checkout/Checkout';

function App() {
	return (
		<>
			<CartContextProvider>
			<Router>
				<Navbar/>		
				<Switch>
					<Route exact path="/" component= {HomePageContainer}/>
					<Route exact path="/products">
						<ItemListContainer message="Bienvenido a la Tienda Oficial del Club Atlético Boca Juniors"/>
					</Route>
					<Route exact path="/category/:cateId"> 
						<ItemListContainer message="Bienvenido a la Tienda Oficial del Club Atlético Boca Juniors"/>
					</Route>
					<Route exact path="/detail/:prodId" component={ItemDetailContainer} />
					<Route path="/contact" component={ContactContainer}/>
					<Route path="/cart" component={CartView}/>
					<Route path="/checkout" component={Checkout}/>
				</Switch>
				<FooterContainer/>
			</Router> 
			</CartContextProvider>
		</>
	);
}

export default App;
