// import * as React from 'react';

interface Props {
}

const SignUpForm = (props: Props) => {
	return (
		<form action="/" className="form">
			<label
				htmlFor="name"
				className="form__label sixt-text"
			>Name</label>
			<input
				type="text"
				id="name"
				className="form__input"
				placeholder="Victor Cordova"
				required
			/>

			<label
				htmlFor="email"
				className="form__label sixt-text"
			>Email address</label>
			<input
				type="email"
				id="email"
				className="form__input"
				placeholder="user@email.com"
				required
			/>

			<label
				htmlFor="password"
				className="form__label sixt-text"
			>Password</label>
			<input
				type="password"
				id="password"
				className="form__input"
				placeholder="*********"
				required
			/>

			<input
				type="submit"
				className="button primary-button button--bottom"
				defaultValue="Sign up"
			/>
		</form>
	);
}

export {
	SignUpForm,
}
