// import * as React from 'react';

import { useState } from "react";

interface Props {
	defaultToggle?: boolean,
}

const useToggle = ({defaultToggle}: Props) => {
	let defaultState = false;
	if(defaultToggle !== undefined) {
		defaultState = defaultToggle;
	}

	const [toggle, setToggle] = useState<boolean>(defaultState);

	const handleToggle = (value?: boolean) => {
		if(value === undefined) setToggle(!toggle);
		else setToggle(value);
	}

	return {
		toggle,
		handleToggle,
	};
}

export {
	useToggle,
}
