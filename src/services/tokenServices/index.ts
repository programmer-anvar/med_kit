const TOKEN_KEY = 'accessToken';

const getToken = () => {
	return localStorage.getItem(TOKEN_KEY);
};

const saveToken = (value: string) => {
	localStorage.setItem(TOKEN_KEY, value);
};

const removeToken = () => {
	localStorage.removeItem(TOKEN_KEY);
};

export { getToken, saveToken, removeToken };
