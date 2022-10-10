// import * as React from 'react';
import { FormEvent, useRef } from "react";
import "Styles/form.css";

interface IAppProps {
}

const LoginForm = () => {

	const formEl = useRef<HTMLFormElement>(null);
	let formData: FormData;

	if (formEl.current) {
		formData = new FormData(formEl.current);
		console.log(formData);
		console.log("hola mundo")
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formEl.current) {
			formData = new FormData(formEl.current);
		}
		console.log(formData.get("password"));
		console.log(formData.get("email"));
	}

	return (
		<form
			action="/"
			className="form"
			onSubmit={handleSubmit}
			ref={formEl}
		>
			<label
				htmlFor="email"
				className="form__label sixt-text"
			>Email address</label>

			<input
				type="email"
				// id="email"
				className="form__input"
				placeholder="user@email.com" required
				name="email"
			/>

			<label
				htmlFor="password"
				className="form__label sixt-text"
			>Password</label>

			<input
				type="password"
				// id="password"
				className="form__input"
				name="password"
				placeholder="*********" required
			/>

			<button
				type="submit"
				className="button primary-button"
			>Confirm
			</button>
		</form>
	);
}

export {
	LoginForm,
}
