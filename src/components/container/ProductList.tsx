import "Styles/productList.css"
import { ProductItem } from "Pure/ProductItem";
import { ReactNode, useEffect } from "react";
import { Product } from "src/models/product.model";
import { useData } from "Hooks/useData";
import { Loading } from "Pure/Loading";

interface Props {
	children: (value: Product, index: number, array: Product[]) => ReactNode,
}

const API: string = "https://api.escuelajs.co/api/v1/products?limit=20&offset=10";

const ProductList = ({children}: Props) => {

	const {
		data,
		addItems,
		preAddItems,
	} = useData({});


	useEffect(() => {
		const getProducts = async () => {
			const response: Response = await fetch(API);
			const products: Product[] = await response.json();

			preAddItems();
			setTimeout(() => {

				addItems(products)
			}, 1000);

		}

		getProducts();
	}, []);

	return (
		<main className="ProductList">
			<div className="ProductList__container">
				{data.loading && <Loading/>}
				{data.items.map(children)}
			</div>
		</main>
	);
}

export {
	ProductList,
}
