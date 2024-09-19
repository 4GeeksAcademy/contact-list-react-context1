import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Modal } from "../views/modal.jsx";

function Card({ name, phone, email, address, id, onEdit }) {
    const { actions } = useContext(Context);
    
    function borrar(id) {
        actions.deleteContacto(id);
        actions.listarContactos();
    }

    return (
        <div className="card bg-white shadow-lg rounded-lg mb-6 overflow-hidden border-3 border-blue-100">
            <div className="flex items-center p-4">
                <div className="w-24 h-24 mr-4">
                    <img
                        src="https://picsum.photos/150/200?grayscale"
                        className="w-full h-full object-cover rounded-full"
                        alt="contactPicture"
                    />
                </div>
                <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-500 flex items-center"><i className="fa-solid fa-phone-flip mr-3"></i>{phone}</p>
                    <p className="text-gray-500 flex items-center"><i className="fa-solid fa-envelope mr-3"></i>{email}</p>
                    <p className="text-gray-500 flex items-center"><i className="fa-solid fa-location-dot mr-3"></i>{address}</p>

                    <div className="flex justify-end mt-4 space-x-3">
                        <button
                            type="button"
                            className="bg-transparent border border-gray-300 text-blue-700 hover:bg-blue-100 rounded-full p-2 transition duration-300"
                            data-bs-toggle="modal"
                            data-bs-target="#modalEditar"
                            onClick={() => onEdit()}
                        >
                            <i className="fa fa-pen"></i>
                        </button>
                        <button
                            className="bg-transparent border border-gray-300 text-red-700 hover:bg-red-100 rounded-full p-2 transition duration-300"
                            onClick={() => borrar(id)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                    <Modal id={id} />
                </div>
            </div>
        </div>
    );
}

export default Card;
