import ReactDOM from "react-dom/client";
import {App} from "./routes/App";
import "Styles/main.css"
import "Styles/text.css"
import "Styles/button.css"
import "Styles/login.container.css"

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
	<App/>
);
