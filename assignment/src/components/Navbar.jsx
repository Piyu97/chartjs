import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<React.Fragment>
			<ul className="nav justify-content-center container bg-dark text-white mt-2">
				<li className="nav-item m-auto">
					<Link to="/">
						CUSTOMER TABLE
					</Link>
				</li>
				<li className="nav-item m-auto">
					<Link to="/order">
						ORDER GRAPH
					</Link>
				</li>
				<li className="nav-item m-auto">
					<Link to="/price">
						PRICE GRAPH
					</Link>
				</li>
			</ul>
		</React.Fragment>
	);
}
export default Navbar;