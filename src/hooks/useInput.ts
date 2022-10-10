// import * as React from 'react';

import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
}

function useInput ({}: Props) {

	const [input, setInput] = useState<string>("");

	const onInput = (event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {

		if(event.target instanceof HTMLInputElement) {
			// const inputFiltered: string = filterWithRegex(event.target.value);
			setInput(event.target.value);
		}
	}

	return {
		onInput,
	};
}

export {
	useInput,
}
