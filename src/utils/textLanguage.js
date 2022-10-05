const i = new Date().getDay();

const days = {
	en: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	],
	id: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
};

const textLanguage = {
	en: {
		loading: "Loading",
		popUp: {
			loginSuccess: "Login successful",
			loginFail: "Login failed",
			registerSuccess: "Registration successful",
			registerFail: "Registration failed",
			invalidEmail: "Invalid email",
			emailNotRegister: "Email is not registered",
			wrongPassword: "Wrong password",
			emailUse: "Email already used",
		},
		register: {
			heading: "Registration",
			text: "Register yourself to the noto app, don't be too serious about filling it out.",
			repeatPassword: "Repeat password",
			buttonBack: "Return",
			buttonSubmit: "Sign up",
			name: "Name",
			limit: "*password minimum 6 characters",
			match: "*password does not match",
		},
		login: {
			heading: "Login",
			text: "Login with a registered account.",
			ask: "Don't have an account? ",
			link: "Sign up",
		},
		sidebar: {
			home: "Home",
			notes: "Notes",
			archive: "Archive",
		},
		cardProfile: "Hello",
		home: {
			heading: "Home",
			text: `Happy ${days.en[i]}, record your day in noto practically.`,
			button: "Add note",
			recentNotes: "Recent notes",
			recentArchive: "Recent archive",
		},
		noteNotFound: {
			text1: "Note not",
			text2: "found",
		},
		notes: {
			heading: "Notes",
			text: "All your new notes are here",
		},
		archive: {
			heading: "Archive",
			text: "All the records you archive are here.",
		},
		addNote: {
			title: "Title...",
			body: "I want to note...",
			button: "Save",
		},
		pageNotFound: {
			description: "Page not found :(",
		},
	},

	id: {
		loading: "Memuat",
		popUp: {
			loginSuccess: "Login berhasil",
			loginFail: "Login gagal",
			registerSuccess: "Registrasi berhasil",
			registerFail: "Registrasi gagal",
			invalidEmail: "Email tidak valid",
			emailNotRegister: "Email tidak terdaftar",
			wrongPassword: "Kata sandi salah",
			emailUse: "Email sudah digunakan",
		},
		register: {
			heading: "Registrasi",
			text: "Daftarkan dirimu ke noto app, jangan terlalu serius untuk mengisinya.",
			repeatPassword: "Ulangi password",
			buttonBack: "Kembali",
			buttonSubmit: "Daftar",
			name: "Nama",
			limit: "*kata sandi minimal 6 karakter",
			match: "*kata sandi tidak cocok",
		},
		login: {
			heading: "Login",
			text: "Login dengan akun yang sudah terdaftar.",
			ask: "belum punya akun? ",
			link: "daftar",
		},
		sidebar: {
			home: "Beranda",
			notes: "Catatan",
			archive: "Arsip",
		},
		cardProfile: "Halo",
		home: {
			heading: "Beranda",
			text: `Selamat hari ${days.id[i]}, catat harimu di noto dengan praktis.`,
			button: "Tambah catatan",
			recentNotes: "Catatan terbaru",
			recentArchive: "Arsip terbaru",
		},
		noteNotFound: {
			text1: "Catatan tidak",
			text2: "ditemukan",
		},
		notes: {
			heading: "Catatan",
			text: "Semua catatan baru Anda ada di sini.",
		},
		archive: {
			heading: "Arsip",
			text: "Semua catatan yang kamu arsip ada di sini.",
		},
		addNote: {
			title: "Judul...",
			body: "Aku ingin mencatat...",
			button: "Simpan",
		},
		pageNotFound: {
			description: "Halaman tidak ditemukan :(",
		},
	},
};

export default textLanguage;
