/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, signOut } from "./authThunk";

const initialState = {
	token: null,
	loading: true,
	userData: {},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	
	
	extraReducers: {
		[signOut.fulfilled]: (state) => {
			state.loading = true;
			state.userData = {};
			state.token = null;
		},
		[login.pending]: (state) => {
			state.loading = true;
		},
		[login.fulfilled]: (state, action) => {
			const { accesToken } = action.payload;
			state.token = accesToken;
			state.userData = "";
			state.loading = false;
		},
		[login.rejected]: (state) => {
			state.loading = true;
		},
		[fetchUserData.fulfilled]: (state, action) => {
			const { accesToken, userData } = action.payload;
			state.token = accesToken;
			state.userData = userData;
			state.loading = false;
		},
		[fetchUserData.rejected]: (state) => {
			state.loading = true;
			state.userData = {};
			state.token = null;
		},
	},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
