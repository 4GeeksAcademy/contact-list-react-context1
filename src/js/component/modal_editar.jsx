import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const ModalEditar = ({ item }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [id, setId] = useState("")

    const { actions } = useContext(Context)
    let handleSubmit = (e) => {
        e.preventDefault();
        actions.editarContacto(name, phone, email, address, id)
    }

    useEffect(() => {
        setName(item.name)
        setEmail(item.email)
        setPhone(item.phone)
        setAddress(item.address)
        setId(item.id)
    }, [item])

    return (
        <div>
            <div className="modal fade" id="modalEditar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form-floating" onSubmit={handleSubmit}>
                                <fieldset>

                                    <div className="mb-3">
                                        <label htmlFor="disabledTextInput" className="form-label">Full name</label>
                                        <input className="form-control" type="text" id="floatingInputValue" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disabledTextInput" className="form-label">Phone</label>
                                        <input className="form-control" type="text" id="floatingInputValue" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disabledTextInput" className="form-label">Email</label>
                                        <input className="form-control" type="text" id="floatingInputValue" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disabledTextInput" className="form-label">Adress</label>
                                        <input className="form-control" type="text" id="floatingInputValue" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}