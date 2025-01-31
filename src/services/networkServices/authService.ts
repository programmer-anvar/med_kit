const BASE_URL = import.meta.env.VITE_BASE_API_KEY;
import axios from 'axios';

export const login = async ({
	username,
	password,
}: {
	username: string;
	password: string;
}) => {
	try {
		const response = await axios.post(`${BASE_URL}/auth/login`, {
			username,
			password,
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};
