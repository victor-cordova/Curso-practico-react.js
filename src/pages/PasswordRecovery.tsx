import logoYardSale from "Logos/logo_yard_sale.svg";

import { PasswordRecoveryForm } from 'Forms/PasswordRecovery.form';

interface Props {
}

const PasswordRecovery = (props: Props) => {
	return (
		<div className="login">
			<div className="login__container">
				<img
					src={logoYardSale}
					alt="logo"
					className="login__logo-container login__logo--yard-sale"
				/>

				<h1 className="primary-text">Create a new password</h1>
				<p className="secondary-text">Enter a new password for your account</p>

				<PasswordRecoveryForm/>
			</div>
		</div>

	);
}

export {
	PasswordRecovery,
}
