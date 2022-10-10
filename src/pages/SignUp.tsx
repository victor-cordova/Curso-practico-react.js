// import * as React from 'react';
import logoYardSale from "Logos/logo_yard_sale.svg";

import { SignUpForm } from "Forms/SignUp.form";

interface Props {
}

function SignUp ({}: Props) {
	return (
		<div className="login">
			<div className="login__container">
				<img
					src={logoYardSale}
					alt="logo"
					className="login__logo-container login__logo--yard-sale"
				/>
				<h1 className="primary-text">Sign up</h1>
				<SignUpForm/>
			</div>
		</div>

	);
}

export {
	SignUp,
}
