const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			crearUsuario: () => {
				fetch('https://playground.4geeks.com/contact/agendas/pablocirus89', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((resp) => resp.json())
					.then((data) => console.log(data))
					.catch((error) => console.log(error))
			},


			listarContactos: () => {
				fetch('https://playground.4geeks.com/contact/agendas/pablocirus89/contacts', {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((resp) => {
						if (resp.ok) {
							return resp.json();
						}
						throw new Error('Network response was not ok.');
					})
					.then((data) => setStore({ contacts: data.contacts }))
					.catch((error) => console.log(error))
			},

			postContacto: (name, phone, email, address) => {
				const store = getStore()
				fetch('https://playground.4geeks.com/contact/agendas/pablocirus89/contacts', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address,
					}),
				})
					.then((resp) => {
						if (resp.ok) {
							return resp.json()
						} else {
							getActions().crearUsuario()
							return resp.json()
						}
						/* return null */
					})
					.then((data) => {
						if (data) {
							/* setStore({ contacts: store.contacts.concat(data) }) */
							console.log(data);
						}
					})
					.catch((error) => console.log(error))
			},

			deleteContacto: (id) => {
				const store = getStore()
				fetch(`https://playground.4geeks.com/contact/agendas/pablocirus89/contacts/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((resp) => {
						if (resp.ok) {
							// Filtrar el array de contactos para eliminar el contacto con el ID proporcionado
							const newArray = contacts.filter(item => item.id !== id);
							// Actualizar el estado con el nuevo array de contactos
							setContacts(newArray);
							return resp.json();
						}
						throw new Error('Network response was not ok.');
					})
					.catch((error) => console.log(error));
					getActions().listarContactos()
			},

			editarContacto: (name, phone, email, address, id) => {
				const store = getStore()
				fetch(`https://playground.4geeks.com/contact/agendas/pablocirus89/contacts/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address,
					}),
				})
					.then((resp) => {
						if (resp.ok) {
							return resp.json()
						} 
					})
					.then((data) => {
						if (data) {
							/* setStore({ contacts: store.contacts.concat(data) }) */
							console.log(data);
						}
					})
					.catch((error) => console.log(error))
					getActions().listarContactos()
			},




		}
	};
};

export default getState;
