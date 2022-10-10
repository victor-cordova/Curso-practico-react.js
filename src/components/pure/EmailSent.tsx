// import * as React from 'react';
import logoYardSale from "Logos/logo_yard_sale.svg";
import iconEmail from "Icons/email.svg";

import "Styles/emailSent.css";

interface Props {
}

const EmailSent = (props: Props) => {
	return (
		<div className="login">
			<div className="login__container">
				<img
					src={logoYardSale}
					alt="logo"
					className="login__logo-container login__logo--yard-sale"
				/>

				<div className="login__container-text">
					<h1 className="primary-text">Email has been sent!</h1>
					<h2
						className="secondary-text centered"
					>Please check your inbox for instructions on how to reset the password</h2>
				</div>


				<div className="login__email-container">
					<img
						src={iconEmail}
						alt="logo"
						className="login__logo--email"
					/>
				</div>

				<button className="button primary-button">Login</button>

				<p className="login__text">
					<span className="third-text">Didn't receive the email? </span>
					<a href="/" className="fourth-text">Resend</a>
				</p>
			</div>
		</div>

	);
}

export {
	EmailSent
}
