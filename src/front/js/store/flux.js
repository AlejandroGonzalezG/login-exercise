import React from "react"
import { toast } from "react-toastify";
import Swal from 'sweetalert2';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: 'https://5000-alejandrogo-loginexerci-2oponp52775.ws-us62.gitpod.io',
			email: '',
			password: '',
			name: '',
			phone_number: '',
			instagram: '',
			facebook: '',
			twitter: '',
			github: '',
			errors: null,
			currentUser: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleChange: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value
				})
			},
			handleRegister: async (e, history) => {
				e.preventDefault();
				const { apiUrl, email, password } = getStore();
				const campos = {
					email: email,
					password: password
				}
				const response = await fetch(`${apiUrl}/api/register`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(campos)
				});
				const { status, message, data } = await response.json();
				console.log(data);
				if (status === 'failed') {
					toast.error(message);
				}
				if (status === 'success') {
					Swal.fire({
						icon: 'success',
						title: message,
						showConfirmButton: false,
						timer: 1500
					})
					sessionStorage.setItem('currentUser', JSON.stringify(data));
					setStore({
						currentUser: data,
						password: ''
					})

					history.push('/');
				}
			},
			handleLogin: async (e, history) => {
				e.preventDefault();
				const { apiUrl, email, password } = getStore();
				const campos = {
					email: email,
					password: password
				}
				const response = await fetch(`${apiUrl}/api/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(campos)
				});

				const { status, message, data } = await response.json();
				console.log(data);
				if (status === 'failed') {
					toast.error(message);
				}

				if (status === 'success') {
					Swal.fire({
						icon: 'success',
						title: message,
						showConfirmButton: false,
						timer: 1500
					})
					sessionStorage.setItem('currentUser', JSON.stringify(data));
					setStore({
						currentUser: data,
						email: '',
						password: '',
					})

					history.push('/');
				}
			},
			loadProfile: () => {
				const { currentUser } = getStore();
				if (currentUser !== null) {
					setStore({
						email: currentUser?.user.email,
						password: '',
						name: currentUser?.user?.profile?.name,
						phone_number: currentUser?.user?.profile?.phone_number,
						instagram: currentUser?.user?.profile?.instagram,
						facebook: currentUser?.user?.profile?.facebook,
						twitter: currentUser?.user?.profile?.twitter,
						github: currentUser?.user?.profile?.github
					})
				}
			},
			checkAuthentication: () => {
				if (sessionStorage.getItem('currentUser')) {
					setStore({
						currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
					})
				}
			},
			handleLogout: () => {
				if (sessionStorage.getItem('currentUser')) {
					sessionStorage.removeItem('currentUser');
					setStore({
						email: '',
						password: '',
						instagram: '',
						facebook: '',
						twitter: '',
						github: '',
						currentUser: null,
					})
					getActions().checkAuthentication();
				}
			},
			handleProfile: async (e) => {
				e.preventDefault();
				const { apiUrl, email, password, name, phone_number, instagram, facebook, twitter, github, currentUser } = getStore();
				const campos = {
					email: email,
					password: password,
					name: name,
					phone_number: phone_number,
					instagram: instagram,
					facebook: facebook,
					twitter: twitter,
					github: github
				}
				const response = await fetch(`${apiUrl}/api/private`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${currentUser?.access_token}`
					},
					body: JSON.stringify(campos)
				});
				const { status, message, data } = await response.json();
				console.log(data);
				if (status === 'failed') {
					toast.error(message);
				}

				if (status === 'success') {
					Swal.fire({
						icon: 'success',
						title: message,
						showConfirmButton: false,
						timer: 1500
					})

					sessionStorage.setItem('currentUser', JSON.stringify(data));
					setStore({
						currentUser: data,
						password: ''
					})
				}
			}
		}
	};
};

export default getState;
