import "Styles/totalOrder.css";

interface Props {
	totalOrder: {
    price: number;
    amount: number;
		date: string;
	}
}

const TotalOrder = ({totalOrder}: Props) => {
	return (
		<div className="TotalOrder">
			<div className="TotalOrder__info">
				<p className="fifth-text">{totalOrder.date}</p>
				<p className="third-text">{totalOrder.amount} articles</p>
			</div>
			<p className="secondary-text bolded">$ {totalOrder.price}</p>
		</div>
	);
}

export {
	TotalOrder,
}
