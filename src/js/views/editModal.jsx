import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";

export const EditModal = (id) => {

    const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.deleteContactos()
	}, [])


    return (
        <div className="modal" id={"editModal"+id.id} tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Contact</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Do you want delete contact?.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}