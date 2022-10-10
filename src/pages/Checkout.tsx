
// import * as React from 'react';
import "Styles/checkout.css";

import { Order } from "Pure/Order";

interface Props {
}

const Checkout = (props: Props) => {
	return (
		<div className="Checkout">

			<div className="Checkout__container">

				<div className="Checkout__title-container">
					<h1 className="primary-text">My orders</h1>
				</div>


				<ul className="Checkout__orders">

					<Order
						amount={6}
						date="04.25.2021"
						price={120.00}
					/>

					<Order
						amount={6}
						date="04.25.2021"
						price={120.00}
					/>
				</ul>
			</div>
		</div>

	);
}

export {
	Checkout,
}
