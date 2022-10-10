// import * as React from 'react';
import logoYardSale from "Logos/logo_yard_sale.svg";
import "Styles/login.css";
import { LoginForm } from "Forms/Login.form";

// interface IAppProps {
// }

const Login = () => {
	return (
		<div
			className="login"
		>
			<div
				className="login__container"
			>
				<img
					src={logoYardSale}
					alt="logo yard sale"
					className="login__logo-container login__logo--yard-sale"
				/>

				<LoginForm/>

				<p className="login__text login__text--forgot-password">
					<a href="/" className="fourth-text">Forgot my password</a>
				</p>
				<button className="button button--bottom secondary-button">Sign up</button>
			</div>
		</div>
	);
}

export {
	Login,
}
