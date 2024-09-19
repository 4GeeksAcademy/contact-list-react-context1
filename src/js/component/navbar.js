import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="h-25 w-150 bg-gradient-to-r from-gray-100 to-transparent shadow-md flex justify-end">
			<Link to="/">
				<img src="https://pngimg.com/uploads/postcard/postcard_PNG56.png" style={{ width: "90px", flex: "none", margin: "5px" }} alt="star wars logo inicio" />
			</Link>
			<div className="ml-auto">
				<Link to="/add-contact">
					<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-3 my-4">
						Add new contact
					</button>
				</Link>
			</div>
		</nav>
	);
};
