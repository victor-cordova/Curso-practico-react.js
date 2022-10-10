// import * as React from 'react';
import iconClose from "Icons/icon_close.png";
import "Styles/shoppingItem.css"

interface Props {
}

const ShoppingItem = (props: Props) => {
	return (
		<li className="list-orders__item">
			<img
				src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				alt="Bike image"
				className="list-orders__img"
			/>
			<p className="list-orders__product">Byke</p>
			<p className="list-orders__price">$ 120.00</p>
			<img
				src={iconClose}
				alt="Icon close"
				className="list-orders__icon-close"/>
		</li>

	);
}

export {
	ShoppingItem,
}
