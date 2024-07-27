import React, { useEffect, useContext, useState } from "react"
import Card from "../component/card.jsx";
import { Context } from "../store/appContext.js";
import { ModalEditar } from "../component/modal_editar.jsx";


export const Home = () => {

	const { store, actions } = useContext(Context)
	const [edit, setEdit]=useState({
		showModal: false, 
		item: {}
	})

	useEffect(() => {
		actions.listarContactos()
	}, [])


	return (
		<div className="conatiner-fluid p-4 m-auto row g-3">

			<div className="col-m-3">
				{store.contacts.length > 0 ? (
					<ul className="list-group">

						{store.contacts.map((contact, index) => (

							<Card
								key={index}
								id={contact.id}
								name={contact.name}
								phone={contact.phone}
								email={contact.email}	
								address={contact.address}
								onEdit={()=>setEdit({showModal: true, item: contact})}
								/>								
						))}
					</ul>
				) : ("")}
			</div>
			<ModalEditar
			show= {edit.showModal}
			item= {edit.item}
			/>
		</div>
	);
}
