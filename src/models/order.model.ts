import { Product } from "./product.model";

export interface Order {
	amount: number,
	product: Product,
	id: string,
}
