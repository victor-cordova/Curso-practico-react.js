// import * as React from 'react';

interface Props {
	children: JSX.Element[] | JSX.Element,
}

const Layout = ({children}: Props) => {
	return (
		<div
			className='Layout'
		>
			{children}
		</div>
	);
}

export {
	Layout
}
