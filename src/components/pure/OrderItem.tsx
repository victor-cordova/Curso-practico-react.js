import iconClose from "Icons/icon_close.png";
import { Order } from "Models/order.model";
import { Product } from "Models/product.model";

import "Styles/orderItem.css"

interface Props {
	item: Order,
	deleteItem: (id: string) => void,
}

const OrderItem = ({item, deleteItem}: Props) => {
	// item.amount
	return (
		<li className="OrderItem">
			<img
				src={item.product.images[0]}
				alt="Bike image"
				className="OrderItem__img"
			/>

			<p className="OrderItem__title third-text">{item.product.title}</p>

			<img
				src={iconClose}
				alt="Icon close"
				className="OrderItem__icon-close"
				onClick={() => deleteItem(item.id)}
			/>
			<p className="sixt-text">Amount: {item.amount}</p>
			<p className="fifth-text OrderItem__price">$ {item.product.price}</p>
		</li>

	);
}

export {
	OrderItem,
}
