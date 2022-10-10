import iconAddToCart from "Icons/bt_add_to_cart.svg";
import { Product } from "src/models/product.model";
import "Styles/productItem.css"

interface Props {
	product: Product,
	addToCart: (item: Product) => void,
}

const ProductItem = ({product, addToCart}: Props) => {
	return (
		<div className="ProductItem">
			<img
				src={product.images[0]}
				alt={`Image ${product.title}`}
				className="ProductItem__image"
			/>
			<div className="ProductItem__info">
				<div className="ProductItem__text">
					<p className="fifth-text">$ {product.price}</p>
					<p className="third-text">{product.title}</p>
				</div>

				<button
					className="ProductItem__cart-button button-icon"
					onClick={() => addToCart(product)}
				>
					<img
						alt="Icon add cart"
						className="button-icon__icon"
						src={iconAddToCart}
					/>
				</button>
			</div>
			{/* <button class="button-remove-cart">Remove from cart</button> */}
		</div>
	);
}

export {
	ProductItem,
}
