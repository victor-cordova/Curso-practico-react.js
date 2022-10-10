import { BrowserRouter as Router,
	Link,
	Route,
	Routes,
	Navigate } from "react-router-dom";

import { EmailSent } from "Pure/EmailSent";
import { Layout } from "Container/Layout";
import { Login } from "Pages/Login";
import { NotFound } from "Pages/NotFound";
import { Home } from "Pages/Home";
import { Account } from "Pages/Account";
import { SignUp } from "Pages/SignUp";
import { PasswordRecovery } from "Pages/PasswordRecovery";
import { MyOrder } from "Container/MyOrder";
import { Checkout } from "Pages/Checkout";
import { ProductDetail } from "Container/ProductDetail";
import { useCart } from "Hooks/useCart";

const App = () => {
	const {
		cart,
		addItem,
		deleteItem,
	} = useCart();

	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home
						cart={cart}
						addItem={addItem}
						deleteItem={deleteItem}
					/>}/>
					<Route path="/account" element={<Account/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/email-sent" element={<EmailSent/>}/>
					<Route path="/password-recovery" element={<PasswordRecovery/>}/>
					<Route path="/checkout" element={<Checkout/>}/>
					<Route path="/signup" element={<SignUp/>}/>
					{/* <Route path="/my-order" element={<MyOrder
						cart={cart}
						addItem={addItem}
						deleteItem={deleteItem}
					/>}/> */}
					<Route path="/product-detail" element={<ProductDetail/>}/>
					{/* <Route path="/my-order" element={<MyOrder/>}/> */}
					{/* chekout */}




					{/* 404 - Page not found */}
					<Route path="*" element={<NotFound/>}/>
				</Routes>
			</Layout>

		</Router>
	)
};

export {
	App,
}
