import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from './routes/Routes';
import store from "./store/store";
import { getToken } from "./utils/HelperFunctions";
import { fetchUserData } from "./store/slices/authThunk";
import './styles/index.css';

if (getToken()) {
	store.dispatch(fetchUserData());
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<Provider store={store}>
			<MainRoutes />
		</Provider>
	</BrowserRouter>
);


