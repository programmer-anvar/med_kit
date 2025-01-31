import { getToken, removeToken, saveToken } from '@/services/tokenServices';
import { createSlice } from '@reduxjs/toolkit';
const initialState = { accessToken: getToken() || null };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signIn: (state, action) => {
			const { accessToken } = action.payload;
			saveToken(accessToken);
			state.accessToken = accessToken;
		},
		signOut: () => {
			removeToken();
			return { accessToken: null };
		},
	},
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
