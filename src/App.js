import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
	const [state, dispatch] = useStateValue();

	useEffect(() => {
		//run once when the app component loads...
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//the user just logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				//the user logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Header />
						<Home />
					</Route>

					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>

					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
