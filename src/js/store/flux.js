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
						console.log(resp)
						/*  if (resp.status ==) {
							listarContactos()
						} */
						return resp.json()
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
						}
						return null
					})
					.then((data) => {
						if (data) {
							setStore({ contacts: store.contacts.concat(data) })
						}
					})
					.catch((error) => console.log(error))
			},

			/* deleteContacto: (id) => {
				const store = getStore()
				fetch(`https://playground.4geeks.com/contact/agendas/pablocirus89/contacts/${id.id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then((resp) => {
						console.log(resp)
						if (resp.ok) { return resp; 
							const newArray
						}
					})
					.then((data) => {
						if(data) {
							const newArray = store.contacts.filter(item => item.id != id)
							setStore({listarContactos: newArray})}

					})
					.catch((error) => console.log(error))
			},
 */


		}
	};
};

export default getState;
