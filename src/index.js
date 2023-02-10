import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from './App';
import store from "./store/store";
import { getToken } from "./utils/HelperFunctions";
import { fetchUserData } from "./store/slices/authThunk";
import './index.css';

if (getToken()) {
	store.dispatch(fetchUserData());
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);


