import { useState } from "react";
import { Data } from "src/models/data.model";
import { STATE } from "Models/state.enum";
import { Product } from "src/models/product.model";

interface Props {
	defaultData?: Product[],
}



const useData = ({defaultData}: Props) => {
	// let defaultState: Product[] = [];
	let defaultState: Data = {
		loading: false,
		items: [],
		error: false,
	};
	if(defaultData !== undefined) {
		defaultState.items = defaultData;
	}

	const [data, setData] = useState<Data>(defaultState);

	// const [data, setData] = useState<Data>(dataLS);

	// const toggleSTATE = (feature: FEATURE, particular?: boolean) => {
	// 	const updatedData: Data = {...initialData};

	// 	// console.log(updatedData);
	// 	if(particular === undefined) {
	// 		updatedData[feature] = !data[feature];
	// 	}
	// 	else {
	// 		updatedData[feature] = particular;
	// 	}
	// 	// console.log(updatedData);
	// 	setData(updatedData);
	// }

	// const deleteItem = (id: string) => {
	// 	const updatedItems: TodoI[] = data.items.filter(item => item.id !== id);

	// 	setData({
	// 		...data,
	// 		items: updatedItems,
	// 	});
	// }

	// const toggleCompleteItem = (id: string) => {
	// 	const updatedItems: TodoI[] = data.items.map(item => {
	// 		if (item.id === id) {
	// 			return {
	// 				...item,
	// 				completed: !item.completed,
	// 			}
	// 		}
	// 		return item;
	// 	});

	// 	setData({
	// 		...data,
	// 		items: updatedItems,
	// 	});
	// 	// setTodos(updatedItems);
	// }

	// const deleteItems = () => {
	// 	console.log("no se elimino nada")
	// 	setData(initialData);
	// }

	// // const refreshTodos = (newTodos: TodoI[]) => {
	// // 	deleteTodos();
	// // 	addTodos(newTodos);
	// // }

	// const replaceItems = (newItems: TodoI[]) => {
	// 	// console.log(newItems)

	// 	setData({
	// 		...data,
	// 		items: [
	// 			...newItems,
	// 		]
	// 	})
	// }

	// const replaceData = (newData: Data) => {
	// 	// console.log(newItems)

	// 	setData({
	// 		...newData,
	// 		// items: [
	// 		// 	...newItems,
	// 		// ]
	// 	})
	// }

	// const preAddItems =
	const preAddItems = () => {
		// const updatedData: Data = {...initialData};

		// console.log(updatedData);
		// if(particular === undefined) {
		// 	updatedData[feature] = !data[feature];
		// }
		// else {
		// 	updatedData[feature] = particular;
		// }
		// console.log(updatedData);
		setData({
			error: false,
			loading: true,
			items: [],
		});
	}

	const addItems = (newItems: Product[]) => {

		setData({
			...data,
			loading: false,
			items: [
				...data.items,
				...newItems,
			]
		})
	}

	return {
		data,
		addItems,
		preAddItems,
		// handleToggle,
	};
}

export {
	useData,
}
