
import logoYardSale from "Logos/logo_yard_sale.svg";

import "Styles/account.css";

interface Props {
}

const Account = (props: Props) => {
	return (
		<div className="login">
			<div className="login__container">
				<img
					src={logoYardSale}
					alt="logo"
					className="login__logo-container login__logo--yard-sale"
				/>

				<h1 className="primary-text">My account</h1>

				<div className="form">
					<label htmlFor="name" className="form__label">Name</label>
					<p className="form__value">Victor Cordova</p>

					<label htmlFor="email" className="form__label">Email address</label>
					<p className="form__value">user@email.com</p>

					<label htmlFor="password" className="form__label">Password</label>
					<p className="form__value">*******</p>


				</div>

				<button className="button secondary-button button--bottom">Edit</button>
			</div>
		</div>

	);
}

export {
	Account,
}
