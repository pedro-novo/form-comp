import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ClientCreationContextProvider } from "./components/context/ClientCreationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ClientCreationContextProvider>
					<App />
				</ClientCreationContextProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
