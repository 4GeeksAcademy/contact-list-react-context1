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
        <div className="card mb-3 border border-secondary border-2">
            <div className="row g-0">
                <div className="col-sm-3 justify-content-center m-auto">
                    <img src="https://picsum.photos/150/200?grayscale" className="img-fluid ms-4 rounded-circle" alt="contactPicture" />
                </div>
                <div className="col-md-8 fs-5">
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-text text-secondary"><i class="fa-solid fa-phone-flip text-secondary me-3"></i>{phone}</p>
                        <p className="card-text text-secondary"><i class="fa-solid fa-envelope text-secondary me-3"></i>{email}</p>                        
                        <p className="card-text text-secondary"><i className="fa-solid fa-location-dot text-secondary me-3"></i>{address}</p>

                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-outline-black" data-bs-toggle="modal" data-bs-target="#modalEditar" onClick={()=>onEdit()}>
                                <i className="fa fa-pen"></i>
                            </button>
                            <button className="btn btn-outline-black" onClick={() => actions.deleteContacto(id)}>
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