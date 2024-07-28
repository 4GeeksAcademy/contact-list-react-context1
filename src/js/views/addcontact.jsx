import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";



const AddContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")


    const { actions } = useContext(Context)
    const navigate = useNavigate()


    let handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone || !email || !address) {
            alert("No puedes dejar campos vacíos")
            return
        }
        actions.postContacto(name, phone, email, address)
        navigate("/")

    }




    return (

        <div className="conatiner-fluid p-4 position-relative">
            <div className="d-grid gap-2 col-6 mx-auto">

                <form className="form-floating" onSubmit={handleSubmit}>
                    <fieldset>
                        <h2 className="m-auto text-center">Add new contact</h2>
                        <div className="mb-3">
                            <h6 htmlFor="disabledTextInput" className="form-label">Full name</h6>
                            <input className="form-control" type="text" id="floatingInputValue" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <h6 htmlFor="disabledTextInput" className="form-label">Phone</h6>
                            <input className="form-control" type="text" id="floatingInputValue" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <h6 htmlFor="disabledTextInput" className="form-label">Email</h6>
                            <input className="form-control" type="text" id="floatingInputValue" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <h6 htmlFor="disabledTextInput" className="form-label">Address</h6>
                            <input className="form-control" type="text" id="floatingInputValue" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <Link to="/" className="mx-2">Or back to contact</Link>
                        </div>
                    </fieldset>
                </form>

            </div>
        </div>

    )

}

export default AddContact;