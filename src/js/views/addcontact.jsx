import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AddContact = () => {
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

                <form className="form-floating" onSubmit={handleSubmit}>
                    <fieldset disabled>
                        <legend m-auto>Add new contact</legend>
                        <div className="mb-3">
                            <label for="disabledTextInput" className="form-label">Full name</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Full name input" />
                        </div>
                        <div className="mb-3">
                            <label for="disabledTextInput" className="form-label">Email</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Full name input" />
                        </div>
                        <div className="mb-3">
                            <label for="disabledTextInput" className="form-label">Phone</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Full name input" />
                        </div>
                        <div className="mb-3">
                            <label for="disabledTextInput" className="form-label">Adress</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Full name input" />
                        </div>
                        <Link to="/" mx-2>Or back to contact</Link>

                        <button type="submit" className="btn btn-primary d-flex m-auto">Save</button>
                    </fieldset>
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

            </div>
        </div>

        /*   */

    )

}

export default AddContact;