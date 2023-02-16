import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "../../utils/HelperFunctions";
import { api } from "../../api/api";
import axios from "axios";


export const fetchUserData = createAsyncThunk(
	"auth/fetchUserData",
	async (_, { rejectWithValue }) => {
		try {
			const accesToken = getToken();
			const payload = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer" + accesToken,
				},
			};
			const response = await axios(api + "profile", payload);
			return {
				userData: response.data.body,
				accesToken: accesToken,
			};
		} catch (e) {
			removeToken();
			return rejectWithValue("");
		}
	}
);

export const login = createAsyncThunk("auth/login", async (payload) => {
	const response = await axios.post(api + "login", payload);

	if (response.status === 200) {
		setToken(response.data.body.token);
	}

	return response.data;
});

export const signOut = createAsyncThunk("auth/signOut", async () => {
	removeToken();
});


