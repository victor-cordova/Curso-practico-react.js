// import * as React from 'react';
import "Styles/notFound.css";

interface Props {
}

const NotFound = (props: Props) => {
	return (
		<main className="NotFound">
			<div className="NotFound__container">
				<div className="NotFound__container-img-404">
					<img
						src="https://i.pinimg.com/564x/47/1a/b6/471ab6cbcbb8a937cfa5330e2c72f234.jpg"
						alt="Image error 404"
						className="NotFound__img-404"
					/>
				</div>
				<div className="NotFound__container-text">
					<h1 className="primary-text">Wooops!</h1>
					<h2 className="secondary-text">
						It seems like we couldn't find the page you were looking for.
					</h2>
				</div>

				<button className="button primary-button">Go back home</button>
			</div>
		</main>
	);
}

export {
	NotFound
}
