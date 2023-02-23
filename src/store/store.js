import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

// Put reducer inside the store
export default configureStore({
	reducer: {
		auth: authSlice,
	},
});