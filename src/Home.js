import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_2x._CB403670067_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="1234567"
						title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
						price={29.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
						rating={5}
					/>
					<Product
						id="123255"
						title="The Four Steps to the Epiphany: Successful Strategies for Products that Win"
						price={19.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51O66ZkiTlL._SX373_BO1,204,203,200_.jpg"
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="12355"
						title="The Four Steps to the Epiphany: Successful Strategies for Products that Win"
						price={19.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51O66ZkiTlL._SX373_BO1,204,203,200_.jpg"
						rating={4}
					/>
					<Product
						id="13255"
						title="The Four Steps to the Epiphany: Successful Strategies for Products that Win"
						price={19.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51O66ZkiTlL._SX373_BO1,204,203,200_.jpg"
						rating={4}
					/>
					<Product
						id="12325788"
						title="The Four Steps to the Epiphany: Successful Strategies for Products that Win"
						price={19.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51O66ZkiTlL._SX373_BO1,204,203,200_.jpg"
						rating={4}
					/>
				</div>

				<div className="home__row">
					<Product
						id="1232570394"
						title="The Four Steps to the Epiphany: Successful Strategies for Products that Win"
						price={19.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51O66ZkiTlL._SX373_BO1,204,203,200_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
