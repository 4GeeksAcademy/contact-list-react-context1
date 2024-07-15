import React, { useEffect, useContext } from "react"
import Card from "../component/card.jsx";
import { Context } from "../store/appContext.js";


export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.listarContactos()
	}, [])


	return (
		<div className="conatiner-fluid p-4 mx-3 row g-3">

			<div className="col-sm-5">
				{store.contacts.length > 0 ? (
					<ul className="list-group">

						{store.contacts.map((contact, index) => (

							<Card
								key={index}
								id={contact.id}
								name={contact.name}
								phone={contact.phone}
								email={contact.email}	
								address={contact.address}/>								
						))}
					</ul>
				) : ("")}
			</div>
		</div>
	);
}
