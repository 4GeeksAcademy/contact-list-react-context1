import React, { useEffect, useContext, useState } from "react";
import Card from "../component/card.jsx";
import { Context } from "../store/appContext.js";
import { ModalEditar } from "../component/modal_editar.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [edit, setEdit] = useState({
		showModal: false,
		item: {}
	});

	useEffect(() => {
		actions.listarContactos();
	}, []);

	return (
		<div className="container mx-auto p-4">
			{store.contacts.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{store.contacts.map((contact, index) => (
						<Card
							key={index}
							id={contact.id}
							name={contact.name}
							phone={contact.phone}
							email={contact.email}
							address={contact.address}
							onEdit={() => setEdit({ showModal: true, item: contact })}
						/>
					))}
				</div>
			) : (
				<p className="text-center text-gray-500 text-lg mt-10">No existen contactos</p>
			)}

			<ModalEditar show={edit.showModal} item={edit.item} />
		</div>
	);
};

