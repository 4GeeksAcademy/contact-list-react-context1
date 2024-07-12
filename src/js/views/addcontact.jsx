import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";



const AddContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState([])
    const [phone, setPhone] = useState([])
    const [address, setAddress] = useState([])


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

        <div className="conatiner-fluid p-4 mx-3 row g-3">

            <div className="col-sm-5">

                <form className="form-floating" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="m-auto">Add new contact</legend>
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
                        <Link to="/" className="mx-2">Or back to contact</Link>

                        <button type="submit" className="btn btn-primary d-flex m-auto">Save</button>
                    </fieldset>
                </form>

            </div>
        </div>

    )

}

export default AddContact;