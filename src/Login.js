import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((err) => alert(err.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push('/');
				}
			})
			.catch((err) => alert(err.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="http:////upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
					alt="logo"
				/>
			</Link>

			<div className="login__container">
				<h1>Sign In</h1>

				<form>
					<h5>Email</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						autoComplete="off"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Sign In
					</button>

					<p>
						By continuing, you agree to Amazon Clone's Conditions of Use and
						Privacy Notice.
					</p>

					<button onClick={register} className="login__registerButton">
						Create your account
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
