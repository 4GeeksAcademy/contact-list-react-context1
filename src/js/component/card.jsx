import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext.js";
import { Modal } from "../views/modal.jsx";

function Card({ name, phone, email, address, id, onEdit}) {
    const {actions} = useContext(Context)
    
	/* useEffect(() => {
		actions.deleteContacto()
	}, [])
 */
    return (
        <div className="card mb-3 border border-info border-2 bg-dark text-white" /* style={{ maxWidth: "540px" }} */>
            <div className="row g-0">
                <div className="col-sm-3 justify-content-center m-auto">
                    <img src="https://picsum.photos/150/200?grayscale" className="img-fluid ms-4 rounded-circle" alt="contactPicture" />
                </div>
                <div className="col-md-8 fs-4">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <p className="card-text"><small className="text-body-secondary">{email}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{address}</small></p>

                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalEditar" onClick={()=>onEdit()}>
                                <i className="fa fa-pen"></i>
                            </button>
                            <button className="btn btn-outline-danger" onClick={() => actions.deleteContacto(id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        </div>
                        <Modal id={id} />                       
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;