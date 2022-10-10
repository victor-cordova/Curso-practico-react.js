import "Styles/form.css";

interface Props {
}

const PasswordRecoveryForm = (props: Props) => {
	return (
		<form action="/" className="form">
			<label htmlFor="password" className="form__label sixt-text">Password</label>
			<input
				type="password"
				id="password"
				className="form__input"
				placeholder="*********"
				required
			/>

			<label
				htmlFor="new-password"
				className="form__label sixt-text">Re-enter password</label>
			<input
				type="password"
				id="new-password"
				className="form__input"
				placeholder="*********"
				required
			/>

			<button
				type="submit"
				className="button primary-button button--bottom"
			>Confirm
			</button>
		</form>
	);
}

export {
	PasswordRecoveryForm,
}
