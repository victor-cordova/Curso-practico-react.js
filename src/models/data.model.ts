import { Product } from "./product.model";

export interface Data {
	loading: boolean,
	items: Product[],
	error: boolean,
}
