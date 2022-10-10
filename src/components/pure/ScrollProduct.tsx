// import * as React from 'react';
import iconClose from "Icons/icon_close.png";
import "Styles/scrollProduct.css"

interface Props {
}

function ScrollProduct (props: Props) {
	return (
		<div className="ScrollProduct">
			<div className="scroll-container">
				<img
					src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					className="scroll-container__img"
					id="product-1"
				/>
				<img
					src="https://platzi-store-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fapi.lorem.space%2Fimage%2Fshoes%3Fw%3D640%26h%3D480%26r%3D7765&w=256&q=75"
					className="scroll-container__img"
					id="product-2"
				/>
				<img
					src="https://platzi-store-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fapi.lorem.space%2Fimage%2Ffashion%3Fw%3D640%26h%3D480%26r%3D141&w=256&q=75"
					className="scroll-container__img"
					id="product-3"
				/>

				<div className="button-close button-icon">
					<img
						src={iconClose}
						alt="Icon close"
						className="button-icon__icon-close"
					/>
				</div>
			</div>

			<nav className="dots">
				<a href="#product-1" className="dots__link">
					<div className="dots__dot dots__dot--actived" />
				</a>
				<a href="#product-2" className="dots__link">
					<div className="dots__dot" />
				</a>
				<a href="#product-3" className="dots__link">
					<div className="dots__dot" />
				</a>
			</nav>
		</div>

	);
}

export {
	ScrollProduct,
}
