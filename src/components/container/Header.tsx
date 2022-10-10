// import * as React from 'react';
import iconMenu from "Icons/icon_menu.svg";
import iconArrow from "Icons/flechita.svg";
import iconShoppingCart from "Icons/icon_shopping_cart.svg";
import logoYardSale from "Logos/logo_yard_sale.svg";

import "Styles/header.css"
import { Feature } from "Pure/Feature";
import { useToggle } from "Hooks/useToggle";
import { Menu } from "Pure/Menu";
import { Product } from "Models/product.model";
import { MyOrder } from "./MyOrder";
import { Order } from "Models/order.model";
import { calculateAmount } from "Utils/index";

interface Props {
	cart: Order[],
	addToCart: (item: Product) => void,
	deleteItem: (id: string) => void,
}

const Header = ({cart, addToCart, deleteItem}: Props) => {

	const {
		toggle: showMenu,
		handleToggle: handleShowMenu,
	} = useToggle({defaultToggle: false});

	const {
		toggle: showOrders,
		handleToggle: handleShowOrders,
	} = useToggle({defaultToggle: false});

	return (
		<nav className="Header">
			<div className="Header__container">

				<div className="Header__menu">
					<img
						src={iconMenu}
						alt="Icon menu"
					/>
				</div>


				<div className="Header__logo-yard-sale">
					<img
						src={logoYardSale}
						alt="Logo yard sale"
						className="Header__logo-yard-sale-img"
					/>
				</div>


				<ul className="Header__list-features">
					<Feature feature="All"/>

					<Feature feature="Clothes"/>

					<Feature feature="Electronics"/>

					<Feature feature="Furniture"/>

					<Feature feature="Toys"/>

					<Feature feature="Others"/>

				</ul>


				<div className="Header__right-side">
					<div className="Header-user">
						<p className="third-text">user@email.com
							<img
								src={iconArrow}
								alt="Icon arrow"
								className="Header-user__arrow"
								onClick={() => {
									handleShowMenu();
									handleShowOrders(false);
								}}
							/>
						</p>
					</div>

					<div
						className="Header-cart"
						onClick={() => {
							handleShowMenu(false);
							handleShowOrders();
						}}
					>
						<img
							src={iconShoppingCart}
							alt="Icon shopping cart"
							className="Header-cart__img"
						/>
						{cart.length > 0 &&
						<div className="Header-cart__amount">{calculateAmount(cart)}</div>}
						{/* <div className="Header-cart__amount">{itemAmount>0?itemAmount: null}</div> */}
					</div>
				</div>
				{showMenu && <Menu/>}
				{showOrders && <MyOrder
					cart={cart}
					addToCart={addToCart}
					deleteItem={deleteItem}
					handleShowOrders={handleShowOrders}
				/>}
			</div>
		</nav>

	);
}

export {
	Header,
}
