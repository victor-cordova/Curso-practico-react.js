// import * as React from 'react';
import "Styles/feature.css";

interface Props {
	feature: string
}

const Feature = ({feature}: Props) => {
	return (
		<li className="Feature">
			<a href="/" className="Feature__link secondary-text">{feature}</a>
		</li>
	);
}

export {
	Feature,
}
