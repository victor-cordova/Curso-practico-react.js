// import * as React from 'react';
import iconArrow from "Icons/flechita.svg";

import "Styles/order.css"

interface Props {
	date: string,
	amount: number,
	price: number,
}

const Order = ({date, amount, price}: Props) => {
	return (
		<li className="Order">
			<div className="Order__info">
				<p className="fifth-text">{date}</p>
				<p className="third-text">{amount} articles</p>
			</div>
			<p className="fifth-text">$ {price}</p>
			<img
				src={iconArrow}
				alt="Icon Arrow"
				className="Order__arrow"
			/>
		</li>
	);
}

export {
	Order,
}
