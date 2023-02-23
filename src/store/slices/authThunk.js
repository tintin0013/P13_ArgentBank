import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "../../utils/HelperFunctions";
import { apiLogin, apiProfile } from "../../api/api";
import axios from "axios";

// This action is called when the user has a token ready on the localStorage.
// If the token isn’t more available, we will just clean the locaStorage and the “global state”.
export const fetchUserData = createAsyncThunk(
	"auth/fetchUserData",
	async (_, { rejectWithValue }) => {
		try {
			const token = getToken();
			const payload = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer" + token,
				},
			};
			const response = await axios(apiProfile, payload);
			return {
				userData: response.data.body,
				token: token,
			};
		} catch (e) {
			removeToken();
			return rejectWithValue("");
		}
	}
);

// This action needs a payload and the failure we will handle in the extraReducers.
export const login = createAsyncThunk("auth/login", async (payload) => {
	const response = await axios.post(apiLogin, payload);

	if (response.status === 200) {
		setToken(response.data.body.token);
	}

	return response.data;
});

// That action just removes the token on localStorage.
export const signOut = createAsyncThunk("auth/signOut", async () => {
	removeToken();
});

// This action need a payload : the updated profile (firstname and lastname)
// Datas will be send to the backend through a "PUT" method
// If the action is rejected, we will just clean the “global state”.
export const updateUserData = createAsyncThunk(
	"auth/updateUserData",
	async (updatedProfile, { rejectWithValue }) => {
		try {
			const token = getToken();
			const payload = {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer" + token,
				},
				body: JSON.stringify(updatedProfile),
			};

			const response = await fetch(apiProfile, payload);
			const jsonResponse = await response.json();
			return {
				userData: jsonResponse.body,
				token: token,
			};
		} catch (e) {
			return rejectWithValue("");
		}
	}
);
