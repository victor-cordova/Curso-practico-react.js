// import * as React from 'react';
import "Styles/menu.css"

interface Props {
}

const Menu = (props: Props) => {
	return (
		<div className="Menu">
			<ul className="Menu__list-items">
				<li className="Menu__item">
					<a
						href="/"
						className="Menu__link fifth-text"
					>My orders</a>
				</li>

				<li className="Menu__item">
					<a
						href="/"
						className="Menu__link fifth-text"
					>My account</a>
				</li>

				<li className="Menu__item Menu__item--sign-out">
					<a
						href="/"
						className="Menu__link Menu__link--sign-out fourth-text"
					>Sign out</a>
				</li>
			</ul>
		</div>

	);
}

export {
	Menu,
}
