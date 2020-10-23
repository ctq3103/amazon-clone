import React from 'react';
import './Header.css';
import { ShoppingBasket, Search } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
	const [{ user, basket }, dispatch] = useStateValue();

	const handleAuth = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to={!user && '/login'}>
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="logo"
				/>
			</Link>

			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<Search className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to="/login">
					<div onClick={handleAuth} className="header__option">
						<span className="header__optionLineOne">
							Hello {user ? user.email : 'Guest'}
						</span>
						<span className="header__optionLineTwo">
							{user ? 'Sign Out' : 'Sign In'}
						</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingBasket />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;