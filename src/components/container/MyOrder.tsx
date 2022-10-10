// import * as React from 'react';
import "Styles/myOrder.css";
import iconArrow from "Icons/flechita.svg";

import { OrderItem } from "Pure/OrderItem";
import { TotalOrder } from "Pure/TotalOrder";
import { Product } from "Models/product.model";
import { Order } from "Models/order.model";
import { calculateAmount, calculatePrice, getDate } from "Utils/index";

interface Props {
	cart: Order[],
	addToCart: (item: Product) => void,
	deleteItem: (id: string) => void,
	handleShowOrders: (value?: boolean | undefined) => void,
}

const MyOrder = ({cart, addToCart, deleteItem, handleShowOrders}: Props) => {
	let totalOrder = {
		price: 0,
		amount: 0,
		date: getDate(),
	}

	if (cart.length) {
		totalOrder = {
			price: calculatePrice(cart),
			amount: calculateAmount(cart),
			date: getDate(),
		}
	}
	return (
		<aside className="MyOrder">
			<div className="MyOrder__container">
				<div className="MyOrder__title-container">
					<h1 className="primary-text">
						<img
							src={iconArrow}
							alt="Icon arrow"
							className="MyOrder__icon-arrow"
							onClick={() => handleShowOrders(false)}
						/>
						My order</h1>
				</div>


				<ul className="MyOrder-orders">
					{cart.map(item => <OrderItem
						deleteItem={deleteItem}
						item={item}
						key={self.crypto.randomUUID()}
					/>)}
				</ul>

				<TotalOrder
					totalOrder={totalOrder}
				/>

				<button className="button primary-button">Checkout</button>
			</div>
		</aside>

	);
}

export {
	MyOrder,
}
