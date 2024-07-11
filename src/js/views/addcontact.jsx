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
            postContacto()
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
                            <label htmlFor="disabledTextInput" className="form-label">Full name</label>
                            <input className="form-control" type="text" id="floatingInputValue" placeholder="Full name" value={newContact} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Email</label>
                            <input className="form-control" type="text" id="floatingInputValue" placeholder="Email" value={newContact} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Phone</label>
                            <input className="form-control" type="text" id="floatingInputValue" placeholder="Phone" value={newContact} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Adress</label>
                            <input className="form-control" type="text" id="floatingInputValue" placeholder="Address" value={newContact} onChange={handleChange} />
                        </div>
                        <Link to="/" mx-2>Or back to contact</Link>

                        <button type="submit" className="btn btn-primary d-flex m-auto">Save</button>
                    </fieldset>
                </form>

            </div>
        </div>

    )

}

export default AddContact;