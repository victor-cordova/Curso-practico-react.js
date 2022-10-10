// import * as React from 'react';

import { ProductList } from "Container/ProductList";
import { Header } from "Container/Header";
import { Product } from "src/models/product.model";
import { ProductItem } from "Pure/ProductItem";
import { MyOrder } from "Container/MyOrder";
import { Order } from "Models/order.model";

interface Props {
	cart: Order[],
	addItem: (item: Product) => void,
	deleteItem: (id: string) => void,
}

const Home = ({addItem: addToCart, cart, deleteItem}: Props) => {

	// const itemAmount: number= cart.length;

	return (
		<div className="Home">
			<Header
				// itemAmount={itemAmount}
				cart={cart}
				addToCart={addToCart}
				deleteItem={deleteItem}
			/>

			<ProductList>
				{(item: Product) => <ProductItem
					product={item}
					key={item.id}
					addToCart={addToCart}
				/>}
			</ProductList>

		</div>
	);
}

export {
	Home,
}
