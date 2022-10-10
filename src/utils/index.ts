import { Order } from "Models/order.model";

const calculateAmount = (items: Order[]): number => {
	const totalAmount: number = items.reduce((pre, curr) => ({
		...curr,
		amount: pre.amount + curr.amount,
	})).amount;

	return totalAmount;
}

const calculatePrice = (items: Order[]): number => {
	// const justOneFeature = items.map(item => item[feature])
	const totalPrice: number = items.map(item => (
		item.amount * item.product.price
	)).reduce((prev, curr) => prev + curr);

	return totalPrice;
}

const getDate = (): string => {
	const date = new Date();

	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
}

export {
	getDate,
	calculateAmount,
	calculatePrice,
}
