import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext.js";
import { Modal } from "../views/modal.jsx";

function Card({ name, phone, email, address, id }) {
    const {actions} = useContext(Context)
    
	useEffect(() => {
		actions.deleteContacto()
	}, [])

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://picsum.photos/150/200?grayscale" className="img-fluid rounded-start rounded-circle" alt="contactPicture" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <p className="card-text"><small className="text-body-secondary">{email}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{address}</small></p>

                        <div>
                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={"#Modal-"+id}>
                                <i className="fa fa-pen"></i>
                            </button>
                        </div>
                        <Modal id={id} />
                        <button className="btn btn-outline-danger" onClick={() => actions.deleteContacto(id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;