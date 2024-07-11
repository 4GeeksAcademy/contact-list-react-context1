import React, { useState, useEffect } from "react"


export const Home = () => {
	let [newContact, setNewContact] = useState('');
	let [contacts, setContacts] = useState([]);

	let handleChange = (event) => {
		setNewContact(event.target.value);
	};

	let handleSubmit = (event) => {
		event.preventDefault();

		if (newContact) {
			postTarea()
			setNewContact('');
		}
	};


	function crearUsuario() {
		fetch('https://playground.4geeks.com/todo/users/pablocirus89', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((resp) => resp.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error))

	}

	function listarContactos() {
		fetch('https://playground.4geeks.com/contact/agendas/pablocirus89/contacts', {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((resp) => {
				console.log(resp.status)
				if (resp.status == 404) {
					crearUsuario()
				}
				return resp.json()
			})

			.then((data) => setContacts(data.contacts))
			.catch((error) => console.log(error))

	}

	 function postContacto() {
		fetch('https://playground.4geeks.com/contact/agendas/pablocirus89/contacts', {
			method: "POST",
			body: JSON.stringify({
					"name": "string",
					"phone": "",
					"email": "",
					"address": ""
					}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((resp) => {
				console.log(resp)
				if (resp.status === 201) { listarContactos() }
				return resp.json()
			})

			.then((data) => console.log(data))

			.catch((error) => console.log(error))

	}

	function deleteContacto(id) {
		fetch(`https://playground.4geeks.com/contact/agendas/pablocirus89/contacts/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((resp) => {

				console.log(resp)
				if (resp.status === 204) { listarContactos() }
				return resp.json()
			})

			.then((data) => console.log(data))
			.catch((error) => console.log(error))
	}



	useEffect(() => {
		crearUsuario()
		listarContactos()
	}, [])


	return (
		<div className="conatiner-fluid p-4 mx-3 row g-3">

			<div className="col-sm-5">
				<h1 className="text-center text-secondary text-opacity-75 fw-bolder">Contacts</h1>
				<form className="form-floating" onSubmit={handleSubmit}>
					{/* <input className="form-control" type="text" id="floatingInputValue" placeholder="Add contact" value={newContact} onChange={handleChange} /> */}
					<div className="card mb-3" style={{ maxWidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src="https://picsum.photos/150/200?grayscale" className="img-fluid rounded-start rounded-circle" alt="contactPicture" />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Name</h5>
									<p className="card-text">Address</p>
									<p className="card-text"><small className="text-body-secondary">Phone</small></p>
									<p className="card-text"><small className="text-body-secondary">Email</small></p>
								</div>
							</div>
						</div>
					</div>
				</form>
				{contacts.length > 0 ? (
					<ul className="list-group">
						{contacts.map((contact, index) => (
							<li className="list-group-item item-li fw-semibold text-center" key={index}>
								{contact.label}

								<button type="button" className="btn-close float-end" aria-label="Close" onClick={() => deleteContacto(contact.id)}>️</button>
							</li>
						))}
					</ul>
				) : ("")}
				{/* <p className="fst-italic font-monospace p-1 fs-6 text-secondary">Nummber of Contacts{contacts.length}</p> */}
			</div>
		</div>
	);
}
