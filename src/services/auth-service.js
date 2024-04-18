import { config } from "@/helpers/config";


const API_URL = config.api.baseUrl;

export const register = (payload) => {
	return fetch(`${API_URL}/api/auth/register`, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const login = (payload) => {
	return fetch(`${API_URL}/api/auth/login`, {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

