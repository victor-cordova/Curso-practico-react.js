import { Order } from "Models/order.model";
import { useState } from "react";
import { Product } from "src/models/product.model";

interface Props {

}

interface Cart {

}

// const initialState = {
// 	cart: [],
// }

const defaultCart: Order[] = [];

const useCart = () => {
	const [cart, setCart] = useState<Order[]>(defaultCart);

	const addItem = (item: Product) => {
		const newCart: Order[] = [...cart];
		const positionProduct: number = newCart.findIndex(order => order.product.id === item.id);



		if (positionProduct === -1) {
			newCart.push({
				amount: 1,
				id: self.crypto.randomUUID(),
				product: item,
			})
		} else {
			newCart[positionProduct].amount += 1;
		}

		console.log(newCart)

		setCart([...newCart]);
	};

	const deleteItem = (id: string) => {
		let cartClone: Order[] = [...cart];
		let updatedItems: Order[] = [];
		const orderIndex: number = cartClone.findIndex(item => item.id === id);

		if (cartClone[orderIndex].amount === 1){
			updatedItems = cartClone.filter(item => item.id !== id);

			// console.log(updatedItems);
			setCart(updatedItems);
		} else {
			cartClone[orderIndex].amount -= 1;

			// console.log(cartClone);
			setCart(cartClone);
		}

		// setCart([]);
	}

	return {
		cart,
		addItem,
		deleteItem,
	}
}

export {
	useCart
};




// const defaultCart: Product[] = [];

// const useCart = () => {
// 	const [cart, setCart] = useState<Product[]>(defaultCart);

// 	const addItem = (item: Product | Product[]) => {
// 		const newItems: any[] = [...cart, item];
// 		const newItemsFlated: Product[] = newItems.flat();

// 		setCart([...newItemsFlated]);

// 		// console.log(cart);
// 	};

// 	const deleteItem = (id: string) => {
// 		const updatedItems: Product[] = cart.filter(item => item.id !== id);

// 		setCart(updatedItems);
// 	}

// 	return {
// 		cart,
// 		addItem,
// 		deleteItem,
// 	}
// }

// export {
// 	useCart
// };
