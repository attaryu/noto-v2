import triggerPopUp from "./triggerPopUp";

const BASE_URL = "https://notes-api.dicoding.dev/v1";

function getAccessToken() {
	return localStorage.getItem("TOKEN");
}

function setAccessToken(token) {
	localStorage.setItem("TOKEN", token);
}

async function register({ name, email, password }) {
	return fetch(`${BASE_URL}/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name, email, password }),
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				triggerPopUp("register", response.message, false);
				return { error: false };
			} else {
				triggerPopUp("register", response.message, true);
				return { error: true };
			}
		})
		.catch((message) => {
			return message;
		});
}

async function login({ email, password }) {
	return await fetch(`${BASE_URL}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				triggerPopUp("login", response.message, false);
				setAccessToken(response.data.accessToken);
				return { error: false };
			} else {
				triggerPopUp("login", response.message, true);
				return { error: true };
			}
		})
		.catch((message) => {
			return message;
		});
}

async function fetchWithToken(url, object = {}) {
	return fetch(url, {
		...object,
		headers: {
			...object.headers,
			Authorization: `Bearer ${getAccessToken()}`,
		},
	});
}

async function getUserLogged() {
	return await fetchWithToken(`${BASE_URL}/users/me`)
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				return { error: false, data: response.data };
			} else {
				return { error: true };
			}
		})
		.catch((message) => message);
}

async function addNote({ title, body }) {
	return await fetchWithToken(`${BASE_URL}/notes`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ title, body }),
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				return { error: false };
			} else {
				return { error: true };
			}
		})
		.catch((message) => message);
}

async function getNotes() {
	return await fetchWithToken(`${BASE_URL}/notes`)
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				return { error: false, archived: false, data: response.data };
			} else {
				return { error: true };
			}
		})
		.catch((message) => message);
}

async function getArchive() {
	return await fetchWithToken(`${BASE_URL}/notes/archived`)
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				return { error: false, archived: true, data: response.data };
			} else {
				return { error: true };
			}
		})
		.catch((message) => message);
}

async function getNote(id) {
	return await fetchWithToken(`${BASE_URL}/notes/${id}`)
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				return { error: false, data: response.data };
			} else {
				return { error: true, data: response.data };
			}
		})
		.catch((message) => message);
}

async function archiveNote(id) {
	return await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
		method: "POST",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				return { error: false, action: "archive" };
			} else {
				return { error: true, action: "archive" };
			}
		})
		.catch((message) => message);
}

async function unarchiveNote(id) {
	return await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
		method: "POST",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				return { error: false, action: "unarchive" };
			} else {
				return { error: true, action: "unarchive" };
			}
		})
		.catch((message) => message);
}

async function deleteNote(id) {
	return await fetchWithToken(`${BASE_URL}/notes/${id}`, {
		method: "DELETE",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response.status === "success") {
				return { error: false, action: "delete" };
			} else {
				return { error: true, action: "delete" };
			}
		})
		.catch((message) => message);
}

export {
	setAccessToken,
	getAccessToken,
	register,
	login,
	getUserLogged,
	addNote,
	getNotes,
	getArchive,
	getNote,
	archiveNote,
	unarchiveNote,
	deleteNote,
};
